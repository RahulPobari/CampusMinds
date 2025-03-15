import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      {/* Ensure StatusBar is initialized first */}
      <StatusBar style="dark" hidden={false} translucent={true} backgroundColor="transparent" />

      {/* SafeAreaView ensures content is placed correctly below the StatusBar */}
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="landing"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}
