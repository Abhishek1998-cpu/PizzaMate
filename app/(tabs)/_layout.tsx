import { Tabs, usePathname } from "expo-router";
import React, { useEffect, useRef } from "react";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { MaterialIcons } from "@expo/vector-icons";
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const opacity = useRef(new Animated.Value(1)).current;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Fade in on every tab navigation change for smoother UX.
    opacity.setValue(0);
    const anim = Animated.timing(opacity, {
      toValue: 1,
      duration: 220,
      delay: 40,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [opacity, pathname]);

  return (
    <Animated.View style={{ flex: 1, opacity }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ec1313",
          tabBarInactiveTintColor: "#7a7a7a",
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopColor: "rgba(255,255,255,0.08)",
            paddingBottom: Math.max(insets.bottom, 8),
            paddingTop: 6,
            height: 62 + Math.max(insets.bottom, 8),
          },
          headerShown: false,
          tabBarButton: HapticTab,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={26} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Recipe",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={26} name="local-library" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={26} name="settings" color={color} />
            ),
          }}
        />
      </Tabs>
    </Animated.View>
  );
}
