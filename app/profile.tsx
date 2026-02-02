import { useAuth } from "@/lib/auth/auth-context";
import {
  fetchBackendProfile,
  getPublicFileViewUrl,
  type Gender,
} from "@/lib/profile/appwrite-profile";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Button,
  Dialog,
  IconButton,
  Portal,
  TextInput,
  useTheme
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";



function genderLabel(g: Gender) {
  switch (g) {
    case "male":
      return "Male";
    case "female":
      return "Female";
    case "other":
      return "Other";
    default:
      return "Prefer not to say";
  }
}

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { user, refreshUser, deleteAccount } = useAuth();
  const { dark, colors } = useTheme();

  const bg = dark ? "#120a0a" : colors.background;
  const cardBg = dark ? "#231010" : "#ffffff";
  const border = dark ? "#3b1a1a" : "rgba(0,0,0,0.10)";
  const text = dark ? "#fff" : "#111";
  const subText = dark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.60)";

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState<{
    fullName: string;
    age: number | null;
    gender: Gender;
    photoUri: string | null;
    photoFileId: string | null;
  }>({
    fullName: user?.name ?? "",
    age: null,
    gender: "prefer_not_to_say",
    photoUri: null,
    photoFileId: null,
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // Source of truth is backend (Appwrite account + prefs).
        const backend = await fetchBackendProfile();
        if (!mounted) return;
        setProfile((p) => ({
          ...p,
          fullName: backend.fullName || user?.name || "",
          age: backend.age ?? null,
          gender: backend.gender ?? "prefer_not_to_say",
          photoUri: null,
          photoFileId: backend.photoFileId ?? null,
        }));
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [user?.name]);

  const ageText = useMemo(() => (profile.age == null ? "" : String(profile.age)), [profile.age]);



  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
    } catch (error) {
      console.error("Failed to delete account:", error);
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  const handleEditProfile = () => {
    setMenuOpen(false);
    router.push("/edit-profile");
  };

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#fff"
          size={24}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={[styles.headerTitle, { color: "#fff" }]}>Profile</Text>
        <IconButton
          icon="dots-horizontal"
          iconColor="#fff"
          size={24}
          onPress={() => setMenuOpen(true)}
          style={styles.backIcon}
        />
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom + 24, 24) }]}>
          {/* Centered Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: dark ? "rgba(244,37,37,0.18)" : "rgba(244,37,37,0.10)", borderColor: "rgba(244,37,37,0.25)" },
                ]}
              >
                {profile.photoUri ? (
                  <Image source={{ uri: profile.photoUri }} style={styles.avatarImage} contentFit="cover" />
                ) : profile.photoFileId ? (
                  <Image source={{ uri: getPublicFileViewUrl(profile.photoFileId) }} style={styles.avatarImage} contentFit="cover" />
                ) : (
                  <MaterialIcons name="account-circle" size={120} color={dark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)"} />
                )}
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={[styles.namePreview, { color: "#fff" }]} numberOfLines={1}>
                {profile.fullName || "Marco Rossi"}
              </Text>
              <Text style={[styles.emailPreview, { color: "rgba(244,37,37,0.75)" }]} numberOfLines={1}>
                {user?.email ?? "pizzamaster_marco@example.com"}
              </Text>
            </View>
          </View>

          {/* Personal Information Section */}
          <View style={styles.formSection}>
            <Text style={[styles.sectionTitle, { color: "#fff" }]}>
              Personal Information
            </Text>

            <View style={styles.formGroup}>
              <Text style={[styles.label, { color: "rgba(255,255,255,0.8)" }]}>Age</Text>
              <TextInput
                mode="outlined"
                value={ageText}
                onChangeText={(v) => {
                  const digits = v.replace(/[^\d]/g, "");
                  if (!digits) {
                    setProfile((p) => ({ ...p, age: null }));
                    return;
                  }
                  const n = Number.parseInt(digits, 10);
                  setProfile((p) => ({ ...p, age: Number.isFinite(n) ? n : null }));
                }}
                placeholder="Enter your age"
                keyboardType="number-pad"
                outlineColor="rgba(255,255,255,0.10)"
                activeOutlineColor="#f42525"
                textColor="#fff"
                cursorColor="#f42525"
                editable={false}
                style={[styles.input, { backgroundColor: "rgba(255,255,255,0.05)" }]}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={[styles.label, { color: "rgba(255,255,255,0.8)" }]}>Gender</Text>
              <Pressable
                disabled={true}
                style={[styles.selectInput, { borderColor: "rgba(255,255,255,0.10)", backgroundColor: "rgba(255,255,255,0.05)" }]}
                accessibilityRole="button"
                accessibilityLabel="Select gender"
              >
                <Text style={{ color: "#fff", fontFamily: "Inter_400Regular", fontSize: 16 }}>{genderLabel(profile.gender)}</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="rgba(255,255,255,0.5)" />
              </Pressable>
            </View>


          </View>

          {/* Delete Account Button */}
          <Button
            mode="text"
            textColor="rgba(255,255,255,0.4)"
            onPress={() => setDeleteDialogOpen(true)}
            style={styles.deleteBtn}
            labelStyle={styles.deleteBtnLabel}
          >
            Delete Account
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>

      <Portal>


        <Dialog visible={deleteDialogOpen} onDismiss={() => setDeleteDialogOpen(false)} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>Delete Account</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              Are you sure you want to delete your account? This action cannot be undone.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor="rgba(255,255,255,0.75)"
              onPress={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              textColor="#f42525"
              onPress={handleDeleteAccount}
            >
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>

        <Dialog visible={menuOpen} onDismiss={() => setMenuOpen(false)} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>Profile Options</Dialog.Title>
          <Dialog.Content>
            <Pressable
              onPress={handleEditProfile}
              style={styles.menuItem}
              accessibilityRole="button"
              accessibilityLabel="Edit Profile"
            >
              <MaterialIcons name="edit" size={24} color="#f42525" />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </Pressable>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor="rgba(255,255,255,0.75)"
              onPress={() => setMenuOpen(false)}
            >
              Close
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View >
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIcon: { margin: 0 },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  content: { paddingHorizontal: 16, paddingTop: 8 },
  profileSection: {
    alignItems: "center",
    paddingVertical: 24,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },

  profileInfo: {
    alignItems: "center",
    marginTop: 16,
  },
  namePreview: {
    fontSize: 24,
    fontFamily: "Lexend_700Bold",
    marginBottom: 4,
  },
  emailPreview: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  formSection: {
    paddingHorizontal: 4,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    marginBottom: 8,
    paddingLeft: 4,
  },
  input: {
    borderRadius: 12,
    fontSize: 16,
  },
  selectInput: {
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  deleteBtn: {
    marginTop: 16,
  },
  deleteBtnLabel: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
  dialog: { backgroundColor: "#1e1e1e", borderRadius: 14 },
  dialogTitle: { color: "#fff", fontFamily: "Lexend_700Bold", fontSize: 22 },
  dialogText: { color: "#fff", fontSize: 16, fontFamily: "Inter_500Medium" },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 16,
    borderRadius: 8,
  },
  menuItemText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
});

