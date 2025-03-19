import { AuthContext } from "@/context/AuthContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface USER {
  id: number;
  name: string;
  email: string;
  image: string;
}

export default function RootLayout() {
  const [user, setUser] = useState<USER | undefined>(undefined);

  return (
    <>
      <StatusBar style="dark" hidden={false} translucent backgroundColor="transparent" />

      <AuthContext.Provider value={{ user, setUser }}>
        <Stack>
          {/* Public Screens */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="landing" options={{ headerShown: false }} />

          {/* Authentication Screens */}
          <Stack.Screen
            name="(auth)/SignUp"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "",
            }}
          />
          <Stack.Screen
            name="(auth)/SignIn"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "",
            }}
          />

          {/* Main App Screens */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="add-post/index" options={{ headerTitle: "Add New Post" }} />


          <Stack.Screen name="exploreClubs" options={{ headerTitle: "Explore Clubs" }} />
        </Stack>
      </AuthContext.Provider>
    </>
  );
}
