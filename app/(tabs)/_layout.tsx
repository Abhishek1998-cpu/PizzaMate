import { Tabs } from "expo-router";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ec1313",
        tabBarInactiveTintColor: "#7a7a7a",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopColor: "rgba(255,255,255,0.08)",
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
  );
}
