import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
     
      <StatusBar style="dark" hidden={false} translucent={true} backgroundColor="transparent" />

     
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
