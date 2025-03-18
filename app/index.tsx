import { auth } from "@/configs/FirebaseConfig";
import { AuthContext } from "@/context/AuthContext";
import Colors from "@/data/Colors";
import axios from "axios";
import { Redirect, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  onAuthStateChanged(auth, async (userData) => {

    if (userData && userData?.email) {
      const result = await axios.get("http://192.168.205.77:8082/user/?email=" + userData?.email);
      console.log(result.data);
      setUser(result.data);
      router.replace('/(tabs)/Home');
    }
    else {
      router.replace('/landing');
    }
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f8f9fa',
      }}
    >
      <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
    </View>
  );
}
