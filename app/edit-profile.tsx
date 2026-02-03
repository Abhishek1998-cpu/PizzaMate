import { useAuth } from "@/lib/auth/auth-context";
import { fetchBackendProfile, getPublicFileViewUrl, updateBackendProfile, type Gender } from "@/lib/profile/appwrite-profile";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Button, Dialog, IconButton, Portal, TextInput, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EditProfileScreen() {
    const insets = useSafeAreaInsets();
    const { height: windowHeight } = useWindowDimensions();
    const { user, refreshUser } = useAuth();
    const { dark, colors } = useTheme();

    const bg = dark ? "#221010" : "#f8f5f5";
    const cardBg = dark ? "#341818" : "#ffffff";
    const border = dark ? "#683131" : "rgba(0,0,0,0.15)";
    const text = dark ? "#fff" : "#111";
    const inputBg = dark ? "#341818" : "#ffffff";
    const placeholderColor = dark ? "#cb9090" : "#999";
    const changePhotoBtnBg = dark ? "#492222" : "#6b2d2d";
    const footerBorder = dark ? "rgba(104,49,49,0.2)" : "rgba(0,0,0,0.08)";
    const cancelBtnColor = dark ? "#cb9090" : "#666";
    const dialogBg = dark ? "#1e1e1e" : "#ffffff";
    const dialogTextColor = dark ? "#fff" : "#111";

    // On short screens, use compact spacing so Gender section is visible
    const isShortScreen = windowHeight < 700;
    const footerHeight = 16 + 56 + 12 + 40 + 16 + insets.bottom;
    const scrollPaddingBottom = Math.max(footerHeight + 80, 200);

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [imagePickerMissing, setImagePickerMissing] = useState(false);

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
            } catch (err) {
                console.error("Failed to fetch profile for edit:", err);
            }
        })();
        return () => {
            mounted = false;
        };
    }, [user?.name]);

    const ageText = profile.age !== null ? String(profile.age) : "";

    const pickImage = async () => {
        try {
            const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!perm.granted) return;

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: "images" as any,
                allowsEditing: false,
                quality: 0.9,
            });

            if (!result.canceled && result.assets?.[0]) {
                setProfile((p) => ({ ...p, photoUri: result.assets[0].uri }));
            }
        } catch (err) {
            if (String(err).includes("expo-image-picker")) {
                setImagePickerMissing(true);
            }
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await updateBackendProfile({
                fullName: profile.fullName,
                age: profile.age,
                gender: profile.gender,
                photoUri: profile.photoUri,
            });
            await refreshUser();
            router.back();
        } catch (error) {
            console.error("Failed to save profile:", error);
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <View style={[styles.screen, { backgroundColor: bg }]}>
            <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
                <IconButton
                    icon="arrow-left"
                    iconColor={text}
                    size={24}
                    onPress={() => router.back()}
                    style={styles.backIcon}
                />
                <Text style={[styles.headerTitle, { color: text }]}>Edit Profile</Text>
                <View style={styles.headerSpacer} />
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={[
                        styles.content,
                        { paddingBottom: scrollPaddingBottom },
                        isShortScreen && { paddingTop: 8 },
                    ]}
                    showsVerticalScrollIndicator={true}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Profile Photo Section */}
                    <View style={[styles.photoSection, isShortScreen && { paddingVertical: 8 }]}>
                        <Pressable onPress={pickImage} accessibilityRole="button" accessibilityLabel="Change profile picture">
                            <View
                                style={[
                                    styles.avatar,
                                    isShortScreen && { width: 96, height: 96, borderRadius: 48 },
                                    {
                                        backgroundColor: dark ? "rgba(244,37,37,0.18)" : "rgba(244,37,37,0.10)",
                                        borderColor: dark ? "rgba(244,37,37,0.25)" : "rgba(244,37,37,0.35)",
                                    },
                                ]}
                            >
                                {profile.photoUri ? (
                                    <Image source={{ uri: profile.photoUri }} style={styles.avatarImage} contentFit="cover" />
                                ) : profile.photoFileId ? (
                                    <Image source={{ uri: getPublicFileViewUrl(profile.photoFileId) }} style={styles.avatarImage} contentFit="cover" />
                                ) : (
                                    <MaterialIcons name="account-circle" size={isShortScreen ? 88 : 120} color={dark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)"} />
                                )}
                            </View>
                        </Pressable>

                        <Button
                            mode="contained"
                            buttonColor={changePhotoBtnBg}
                            textColor="#fff"
                            onPress={pickImage}
                            style={styles.changePhotoBtn}
                            contentStyle={styles.changePhotoBtnContent}
                            labelStyle={styles.changePhotoBtnLabel}
                        >
                            Change Photo
                        </Button>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.formContainer}>
                        {/* Full Name */}
                        <View style={styles.fieldGroup}>
                            <Text style={[styles.label, { color: text }]}>Full Name</Text>
                            <TextInput
                                mode="outlined"
                                value={profile.fullName}
                                onChangeText={(v) => setProfile((p) => ({ ...p, fullName: v }))}
                                placeholder="Enter your full name"
                                outlineColor={border}
                                activeOutlineColor="#f42525"
                                textColor={text}
                                cursorColor="#f42525"
                                placeholderTextColor={placeholderColor}
                                style={[styles.input, { backgroundColor: inputBg }]}
                            />
                        </View>

                        {/* Age */}
                        <View style={styles.fieldGroup}>
                            <Text style={[styles.label, { color: text }]}>Age</Text>
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
                                outlineColor={border}
                                activeOutlineColor="#f42525"
                                textColor={text}
                                cursorColor="#f42525"
                                placeholderTextColor={placeholderColor}
                                style={[styles.input, { backgroundColor: inputBg }]}
                            />
                        </View>

                        {/* Gender */}
                        <View style={styles.fieldGroup}>
                            <Text style={[styles.sectionTitle, { color: text }]}>Gender</Text>
                            <View style={styles.genderButtons}>
                                <Pressable
                                    onPress={() => setProfile((p) => ({ ...p, gender: "male" }))}
                                    style={[
                                        styles.genderButton,
                                        profile.gender === "male"
                                            ? { borderColor: "#f42525", backgroundColor: "rgba(244,37,37,0.1)" }
                                            : { borderColor: border, backgroundColor: inputBg },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.genderButtonText,
                                            { color: profile.gender === "male" ? "#f42525" : text },
                                        ]}
                                    >
                                        Male
                                    </Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => setProfile((p) => ({ ...p, gender: "female" }))}
                                    style={[
                                        styles.genderButton,
                                        profile.gender === "female"
                                            ? { borderColor: "#f42525", backgroundColor: "rgba(244,37,37,0.1)" }
                                            : { borderColor: border, backgroundColor: inputBg },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.genderButtonText,
                                            { color: profile.gender === "female" ? "#f42525" : text },
                                        ]}
                                    >
                                        Female
                                    </Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => setProfile((p) => ({ ...p, gender: "other" }))}
                                    style={[
                                        styles.genderButton,
                                        profile.gender === "other"
                                            ? { borderColor: "#f42525", backgroundColor: "rgba(244,37,37,0.1)" }
                                            : { borderColor: border, backgroundColor: inputBg },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.genderButtonText,
                                            { color: profile.gender === "other" ? "#f42525" : text },
                                        ]}
                                    >
                                        Other
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Footer Actions */}
            <View
                style={[
                    styles.footer,
                    {
                        paddingBottom: Math.max(insets.bottom + 16, 16),
                        backgroundColor: bg,
                        borderTopColor: footerBorder,
                    },
                ]}
            >
                <Button
                    mode="contained"
                    buttonColor="#f42525"
                    textColor="#fff"
                    onPress={handleSave}
                    loading={saving}
                    disabled={saving}
                    style={styles.saveBtn}
                    contentStyle={styles.saveBtnContent}
                    labelStyle={styles.saveBtnLabel}
                >
                    Save Changes
                </Button>

                <Button
                    mode="text"
                    textColor={cancelBtnColor}
                    onPress={handleCancel}
                    style={styles.cancelBtn}
                    labelStyle={styles.cancelBtnLabel}
                >
                    Cancel
                </Button>
            </View>

            <Portal>
                <Dialog
                    visible={imagePickerMissing}
                    onDismiss={() => setImagePickerMissing(false)}
                    style={[styles.dialog, { backgroundColor: dialogBg }]}
                >
                    <Dialog.Title style={[styles.dialogTitle, { color: dialogTextColor }]}>Upload unavailable</Dialog.Title>
                    <Dialog.Content>
                        <Text style={[styles.dialogText, { color: dialogTextColor }]}>
                            Image upload isn&apos;t available in this build. Please rebuild the app with
                            <Text style={{ fontFamily: "Inter_700Bold" }}> expo-image-picker</Text> included.
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button textColor="#f42525" onPress={() => setImagePickerMissing(false)}>
                            OK
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
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
    headerSpacer: { width: 40 },
    content: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    photoSection: {
        alignItems: "center",
        paddingVertical: 16,
        gap: 16,
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
    changePhotoBtn: {
        borderRadius: 12,
        width: "100%",
        maxWidth: 480,
    },
    changePhotoBtnContent: {
        height: 40,
    },
    changePhotoBtnLabel: {
        fontSize: 14,
        fontFamily: "Inter_700Bold",
        fontWeight: "700",
    },
    formContainer: {
        gap: 8,
        maxWidth: 480,
        width: "100%",
        alignSelf: "center",
    },
    fieldGroup: {
        paddingVertical: 10,
    },
    label: {
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        fontWeight: "500",
        marginBottom: 8,
    },
    input: {
        height: 56,
        borderRadius: 12,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: "Lexend_700Bold",
        fontWeight: "700",
        marginBottom: 16,
    },
    genderButtons: {
        flexDirection: "row",
        gap: 12,
    },
    genderButton: {
        flex: 1,
        height: 48,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    genderButtonText: {
        fontSize: 14,
        fontFamily: "Inter_500Medium",
        fontWeight: "500",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        gap: 12,
    },
    saveBtn: {
        borderRadius: 16,
    },
    saveBtnContent: {
        height: 56,
    },
    saveBtnLabel: {
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        fontWeight: "700",
    },
    cancelBtn: {
        height: 40,
    },
    cancelBtnLabel: {
        fontSize: 14,
        fontFamily: "Inter_500Medium",
    },
    dialog: {
        backgroundColor: "#1e1e1e",
        borderRadius: 14,
    },
    dialogTitle: {
        color: "#fff",
        fontFamily: "Lexend_700Bold",
        fontSize: 22,
    },
    dialogText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter_500Medium",
    },
});
