import { ID } from "appwrite";

import { appwriteAccount, appwriteStorage, getAppwriteConfig } from "@/lib/appwrite";
import { getStoredSessionId } from "@/lib/auth/session";

export type Gender = "male" | "female" | "other" | "prefer_not_to_say";

export type BackendProfile = {
  fullName: string;
  email: string;
  age: number | null;
  gender: Gender;
  photoFileId: string | null;
  photoUrl: string | null;
};

const PREF_AGE = "profile_age";
const PREF_GENDER = "profile_gender";
const PREF_PHOTO = "profile_photoFileId";

function normalizeGender(v: unknown): Gender {
  if (v === "male" || v === "female" || v === "other" || v === "prefer_not_to_say") return v;
  return "prefer_not_to_say";
}

export function getPublicFileViewUrl(fileId: string): string {
  const cfg = getAppwriteConfig();
  const endpoint = cfg.endpoint.replace(/\/+$/, "");
  const projectId = cfg.projectId;
  const bucketId = cfg.bucketId;
  return `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${projectId}`;
}

export async function fetchBackendProfile(): Promise<BackendProfile> {
  const me = await appwriteAccount.get();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prefs = ((me as any)?.prefs ?? {}) as Record<string, unknown>;

  const ageRaw = prefs[PREF_AGE];
  const age =
    typeof ageRaw === "number" && Number.isFinite(ageRaw) ? ageRaw : null;

  const gender = normalizeGender(prefs[PREF_GENDER]);
  const photoFileIdRaw = prefs[PREF_PHOTO];
  const photoFileId = typeof photoFileIdRaw === "string" ? photoFileIdRaw : null;
  const photoUrl = photoFileId ? getPublicFileViewUrl(photoFileId) : null;

  return {
    fullName: me.name ?? "",
    email: me.email ?? "",
    age,
    gender,
    photoFileId,
    photoUrl,
  };
}

export async function updateBackendProfile(params: {
  fullName: string;
  age: number | null;
  gender: Gender;
  photoUri?: string | null;
}): Promise<void> {
  const me = await appwriteAccount.get();
  const userId = me.$id;

  const fullName = params.fullName.trim();
  if (fullName && fullName !== me.name) {
    await appwriteAccount.updateName(fullName);
  }

  let nextPhotoFileId: string | null | undefined = undefined;
  if (params.photoUri) {
    // Upload image to Appwrite Storage and store file id in prefs.
    //
    // NOTE: In some RN builds, the Appwrite SDK `InputFile` helpers may be unavailable.
    // We therefore upload via REST + FormData using the stored session id.
    const cfg = getAppwriteConfig();
    const sessionId = await getStoredSessionId();
    if (!sessionId) {
      throw new Error("Not signed in. Please log in again.");
    }

    const endpoint = cfg.endpoint.replace(/\/+$/, "");
    const url = `${endpoint}/storage/buckets/${cfg.bucketId}/files`;
    const fileId = ID.unique();
    const filename = `profile-${userId}.jpg`;

    const form = new FormData();
    form.append("fileId", fileId);
    // @ts-expect-error React Native FormData file shape
    form.append("file", { uri: params.photoUri, name: filename, type: "image/jpeg" });
    // Make it publicly readable so <Image> can load the view URL.
    form.append("permissions[]", 'read("any")');
    // Allow user to update/delete their own file.
    form.append("permissions[]", `update("user:${userId}")`);
    form.append("permissions[]", `delete("user:${userId}")`);

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "X-Appwrite-Project": cfg.projectId,
        "X-Appwrite-Session": sessionId,
      },
      body: form,
    });

    const json = (await resp.json()) as { $id?: string; message?: string };
    if (!resp.ok || !json.$id) {
      throw new Error(json?.message ?? "Failed to upload profile photo");
    }

    nextPhotoFileId = json.$id;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentPrefs = ((me as any)?.prefs ?? {}) as Record<string, unknown>;
  const mergedPrefs: Record<string, unknown> = {
    ...currentPrefs,
    [PREF_AGE]: params.age,
    [PREF_GENDER]: params.gender,
  };
  if (nextPhotoFileId !== undefined) mergedPrefs[PREF_PHOTO] = nextPhotoFileId;

  await appwriteAccount.updatePrefs(mergedPrefs);
}

