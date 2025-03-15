import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Redirect href={'/landing'}/>
    </View>
  );
}
