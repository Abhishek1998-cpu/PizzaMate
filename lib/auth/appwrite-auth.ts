import * as Linking from 'expo-linking';
import { ID, Models } from 'appwrite';
import { appwriteAccount, appwriteClient } from '../appwrite';
import { clearStoredSessionId, storeSessionId } from './session';

export function appwriteErrorMessage(err: unknown) {
  if (!err || typeof err !== 'object') return 'Something went wrong';
  const anyErr = err as { message?: string };
  return anyErr.message ?? 'Something went wrong';
}

export async function signInWithEmail(email: string, password: string) {
  const session = await appwriteAccount.createEmailPasswordSession(email, password);
  // RN/Expo doesn't reliably persist cookies; set + persist session explicitly.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sessionId = (session as any).$id as string | undefined;
  if (sessionId) {
    appwriteClient.setSession(sessionId);
    await storeSessionId(sessionId);
  }
  return session as Models.Session;
}

export async function signUpWithEmail(params: {
  name: string;
  email: string;
  password: string;
}) {
  await appwriteAccount.create(ID.unique(), params.email, params.password, params.name);
  return await signInWithEmail(params.email, params.password);
}

export async function signOut() {
  try {
    await appwriteAccount.deleteSession('current');
  } catch (e) {
    // If user is not logged in (guest), Appwrite will reject session calls with missing scopes.
    // We still want a "local logout" behavior (clear local session + redirect to login).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = e as any;
    const msg = typeof err?.message === 'string' ? err.message : '';
    const code = typeof err?.code === 'number' ? err.code : undefined;
    const isGuestScopeError =
      code === 401 || msg.toLowerCase().includes('missing scopes') || msg.toLowerCase().includes('guests');
    if (!isGuestScopeError) {
      throw e;
    }
  } finally {
    // Clear local persisted session either way.
    await clearStoredSessionId();
    // Best-effort: clear in-memory session too.
    try {
      appwriteClient.setSession('');
    } catch {
      // ignore
    }
  }
}

export async function getCurrentUser() {
  return await appwriteAccount.get();
}

export async function sendPasswordRecovery(email: string) {
  const recoveryUrl = Linking.createURL('/reset-password');
  await appwriteAccount.createRecovery(email, recoveryUrl);
}

export async function confirmPasswordRecovery(params: {
  userId: string;
  secret: string;
  password: string;
  confirmPassword: string;
}) {
  await appwriteAccount.updateRecovery(
    params.userId,
    params.secret,
    params.password,
    params.confirmPassword
  );
}

