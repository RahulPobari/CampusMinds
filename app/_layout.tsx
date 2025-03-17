import { AuthContext } from "@/context/AuthContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface USER{
  id: number,
  name: string,
  email: string,
  image: string
}

export default function RootLayout() {

  const [user,setUser]=useState<USER | undefined>(undefined);
  return (
    <>
     
      <StatusBar style="dark" hidden={false} translucent={true} backgroundColor="transparent" />

    <AuthContext.Provider value={{user , setUser}}>

        <Stack>
          <Stack.Screen
            name="landing"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/SignUp"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "",
              // headerBackVisible: false,
              }}
              />
          <Stack.Screen
            name="(auth)/SignIn"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "",
              // headerBackVisible: false,
              }}
              />
        </Stack>
        
        </AuthContext.Provider>
    </>
  );
}
