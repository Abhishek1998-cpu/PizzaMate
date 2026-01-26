import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Models } from 'appwrite';

import { appwriteClient } from '../appwrite';
import {
  appwriteErrorMessage,
  confirmPasswordRecovery,
  getCurrentUser,
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
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const refreshUser = async () => {
    try {
      const me = await getCurrentUser();
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
          await refreshUser();
        } catch (e) {
          setError(appwriteErrorMessage(e));
          throw e;
        }
      },
      signUp: async (name, email, password) => {
        try {
          setError(null);
          await signUpWithEmail({ name, email, password });
          await refreshUser();
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

