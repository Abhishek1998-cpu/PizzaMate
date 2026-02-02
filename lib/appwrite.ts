import { Account, Client, Storage } from 'appwrite';
import Constants from 'expo-constants';

type AppwriteExtra = {
  appwrite?: {
    endpoint?: string;
    projectId?: string;
    projectName?: string;
    bucketId?: string;
  };
  webRedirectBaseUrl?: string;
};

function getConfig() {
  // Expo runtime puts `extra` in different places depending on runtime (Expo Go vs Dev Client vs production).
  // We try all known locations.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyConstants = Constants as any;
  const extra =
    ((Constants.expoConfig?.extra as AppwriteExtra | undefined) ??
      (anyConstants.manifest?.extra as AppwriteExtra | undefined) ??
      (anyConstants.manifest2?.extra as AppwriteExtra | undefined) ??
      {}) as AppwriteExtra;

  const endpoint =
    process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? extra.appwrite?.endpoint;
  const projectId =
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? extra.appwrite?.projectId;
  const projectName =
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME ?? extra.appwrite?.projectName;
  const webRedirectBaseUrl =
    process.env.EXPO_PUBLIC_WEB_REDIRECT_BASE_URL ?? extra.webRedirectBaseUrl;
  const bucketId =
    process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID ?? extra.appwrite?.bucketId;

  // Last-resort fallback to avoid hard-crashing in early app init (values are public anyway).
  const finalEndpoint = endpoint ?? 'https://fra.cloud.appwrite.io/v1';
  const finalProjectId = projectId ?? '69748622002fa8040371';

  if (!finalEndpoint || !finalProjectId) {
    throw new Error(
      'Missing Appwrite config. Set EXPO_PUBLIC_APPWRITE_ENDPOINT and EXPO_PUBLIC_APPWRITE_PROJECT_ID (or app.json expo.extra.appwrite.*).'
    );
  }

  // Bucket id is project-specific. Default for this repo:
  const finalBucketId = bucketId ?? 'pizza-mate-bucket';

  return {
    endpoint: finalEndpoint,
    projectId: finalProjectId,
    projectName,
    webRedirectBaseUrl,
    bucketId: finalBucketId,
  };
}

const cfg = getConfig();

export const appwriteClient = new Client()
  .setEndpoint(cfg.endpoint)
  .setProject(cfg.projectId);

export const appwriteAccount = new Account(appwriteClient);
export const appwriteStorage = new Storage(appwriteClient);

export function getAppwriteConfig() {
  return cfg;
}

export function getWebRedirectBaseUrl() {
  return cfg.webRedirectBaseUrl;
}

