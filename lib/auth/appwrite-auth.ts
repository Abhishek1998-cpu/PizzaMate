import { ID, Models } from 'appwrite';
import * as Linking from 'expo-linking';
import { appwriteAccount, appwriteClient, getWebRedirectBaseUrl } from '../appwrite';
import { clearStoredSessionId, getStoredSessionId, storeSessionId } from './session';

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

/** Ensure client has session from storage (handles in-memory session loss). */
async function ensureSessionFromStorage() {
  const stored = await getStoredSessionId();
  if (stored) {
    appwriteClient.setSession(stored);
  }
}

function isSessionOrGuestError(e: unknown): boolean {
  const err = e as { message?: string; code?: number };
  const msg = typeof err?.message === 'string' ? err.message : '';
  const code = typeof err?.code === 'number' ? err.code : undefined;
  const lower = msg.toLowerCase();
  return (
    code === 401 ||
    code === 404 ||
    lower.includes('missing scopes') ||
    lower.includes('guests') ||
    lower.includes('account') ||
    lower.includes('unauthorized')
  );
}

export async function signOut() {
  try {
    await ensureSessionFromStorage();
    await appwriteAccount.deleteSession('current');
  } catch (e) {
    // If session is invalid/expired or user is guest, Appwrite rejects with missing scopes.
    // We still want local logout: clear stored session and redirect to login.
    if (!isSessionOrGuestError(e)) {
      throw e;
    }
  } finally {
    await clearStoredSessionId();
    try {
      appwriteClient.setSession('');
    } catch {
      // ignore
    }
  }
}

export async function deleteUser() {
  // TODO: Actual account deletion requires backend Cloud Function with Users API.
  // Must call signOut to invalidate server session; otherwise login fails with
  // "Creation of a session is prohibited when a session is active".
  try {
    await signOut();
  } catch {
    // signOut may throw (e.g. guests error); we still clear local state in its finally.
    // Never rethrow - caller should always get a successful "logout" from our perspective.
  }
}

export async function getCurrentUser() {
  return await appwriteAccount.get();
}

export async function sendPasswordRecovery(email: string) {
  const base = getWebRedirectBaseUrl();
  const normalized = typeof base === 'string' ? base.replace(/\/+$/, '') : null;
  const recoveryUrl = normalized
    ? `${normalized}/reset-password.html`
    : Linking.createURL('/reset-password');
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

export async function sendEmailVerification() {
  const base = getWebRedirectBaseUrl();
  const normalized = typeof base === 'string' ? base.replace(/\/+$/, '') : null;
  const verifyUrl = normalized
    ? `${normalized}/verify-email.html`
    : Linking.createURL('/verify-email');
  await appwriteAccount.createVerification(verifyUrl);
}

export async function confirmEmailVerification(params: {
  userId: string;
  secret: string;
}) {
  await appwriteAccount.updateVerification(params.userId, params.secret);
}
