import { auth } from "@/configs/FirebaseConfig";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { Redirect } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  const { user, setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, async (userData) => {

    if (userData && userData?.email) {
      const result = await axios.get("http://192.168.205.77:8082/user/?email=" + userData?.email);
      console.log(result.data);
      setUser(result.data);
    }
  })

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Redirect href={'/landing'} />
    </View>
  );
}
