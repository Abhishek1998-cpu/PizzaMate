import * as SecureStore from 'expo-secure-store';

const SESSION_KEY = 'pizzamate.appwrite.sessionId';

export async function storeSessionId(sessionId: string) {
  await SecureStore.setItemAsync(SESSION_KEY, sessionId);
}

export async function getStoredSessionId() {
  return await SecureStore.getItemAsync(SESSION_KEY);
}

export async function clearStoredSessionId() {
  await SecureStore.deleteItemAsync(SESSION_KEY);
}

