import { Models } from 'appwrite';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { appwriteClient } from '../appwrite';
import {
  appwriteErrorMessage,
  confirmEmailVerification,
  confirmPasswordRecovery,
  deleteUser,
  getCurrentUser,
  sendEmailVerification,
  sendPasswordRecovery,
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from './appwrite-auth';
import { getStoredSessionId } from './session';

type AuthContextValue = {
  user: Models.User<Models.Preferences> | null;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
  refreshUser: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  sendRecovery: (email: string) => Promise<void>;
  confirmRecovery: (userId: string, secret: string, password: string, confirmPassword: string) => Promise<void>;
  sendVerification: () => Promise<void>;
  confirmVerification: (userId: string, secret: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const isEmailVerified = (u: Models.User<Models.Preferences> | null) => {
    // Appwrite user has `emailVerification` boolean.
    // Keep this resilient to SDK type changes.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Boolean((u as any)?.emailVerification);
  };

  const refreshUser = async () => {
    try {
      const me = await getCurrentUser();
      if (!isEmailVerified(me)) {
        // If somehow a non-verified session exists locally, force logout.
        try {
          await signOut();
        } catch {
          // ignore
        }
        setUser(null);
        return;
      }
      setUser(me);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const storedSessionId = await getStoredSessionId();
        if (storedSessionId) {
          appwriteClient.setSession(storedSessionId);
        }
        if (mounted) await refreshUser();
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      error,
      clearError,
      refreshUser,
      signIn: async (email, password) => {
        try {
          setError(null);
          await signInWithEmail(email, password);
          const me = await getCurrentUser();
          if (!isEmailVerified(me)) {
            // Block access until the user verifies their email.
            await signOut();
            setUser(null);
            setError('Please verify your email before signing in.');
            throw new Error('EMAIL_NOT_VERIFIED');
          }
          setUser(me);
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      signUp: async (name, email, password) => {
        try {
          setError(null);
          await signUpWithEmail({ name, email, password });
          // Send verification email, then force user to verify before sign-in.
          await sendEmailVerification();
          await signOut();
          setUser(null);
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      signOut: async () => {
        try {
          setError(null);
          await signOut();
        } finally {
          setUser(null);
        }
      },
      sendRecovery: async (email) => {
        try {
          setError(null);
          await sendPasswordRecovery(email);
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      confirmRecovery: async (userId, secret, password, confirmPassword) => {
        try {
          setError(null);
          await confirmPasswordRecovery({ userId, secret, password, confirmPassword });
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      sendVerification: async () => {
        try {
          setError(null);
          await sendEmailVerification();
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      confirmVerification: async (userId, secret) => {
        try {
          setError(null);
          await confirmEmailVerification({ userId, secret });
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      deleteAccount: async () => {
        try {
          setError(null);
          await deleteUser();
        } finally {
          setUser(null);
        }
      },
    }),
    [user, isLoading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

