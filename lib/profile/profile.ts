import * as SecureStore from "expo-secure-store";

export type Gender = "male" | "female" | "other" | "prefer_not_to_say";

export type UserProfile = {
  fullName: string;
  age: number | null;
  gender: Gender;
  photoUri: string | null; // local file URI from ImagePicker
};

const STORAGE_KEY = "pizzamate.profile.v1";

export async function getStoredProfile(): Promise<UserProfile | null> {
  const raw = await SecureStore.getItemAsync(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<UserProfile>;
    if (!parsed || typeof parsed !== "object") return null;

    const fullName =
      typeof parsed.fullName === "string" ? parsed.fullName : "";
    const age =
      typeof parsed.age === "number" && Number.isFinite(parsed.age)
        ? parsed.age
        : null;
    const gender: Gender =
      parsed.gender === "male" ||
      parsed.gender === "female" ||
      parsed.gender === "other" ||
      parsed.gender === "prefer_not_to_say"
        ? parsed.gender
        : "prefer_not_to_say";
    const photoUri =
      typeof parsed.photoUri === "string" ? parsed.photoUri : null;

    return { fullName, age, gender, photoUri };
  } catch {
    return null;
  }
}

export async function setStoredProfile(profile: UserProfile): Promise<void> {
  await SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(profile));
}

