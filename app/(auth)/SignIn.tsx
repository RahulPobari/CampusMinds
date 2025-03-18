import { View, Text, Image, Pressable, StyleSheet, ToastAndroid, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import TextInputField from '@/components/Shared/TextInputField';
import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';
import Colors from '@/data/Colors';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';
import axios from 'axios';
import { AuthContext } from '@/context/AuthContext';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [loading, setLoading] = useState(false);
  const {user,setUser}=useContext(AuthContext);

  const onSignInbtn = () => {

    if (!email || !password) {
      ToastAndroid.show('enter email and password', ToastAndroid.BOTTOM)
      return;
    }
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async(resp) => {
        if (resp.user) {
          // console.log(resp.user?.email)
          //API call to fetch user data
          const result = await axios.get("http://192.168.205.77:8082/user/?email="+resp.user?.email);
          console.log(result.data);
          setUser(result.data);

        }
        setLoading(false);

      }).catch(e => {
        setLoading(false);
        ToastAndroid.show('Incorrect Email OR Password', ToastAndroid.BOTTOM)
        console.log("error: ",e.message)
      })
  };

  return (
    <View style={styles.container}>
      {/* Logo & Title */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./../../assets/images/CampusMinds.png')}
        />
        <Text style={styles.title}>Sign In to CampusMinds</Text>
      </View>

      {/* Input Fields */}
      <TextInputField label="College Email" onChangeText={(v) => setEmail(v)} />
      <TextInputField label="Password" password={true} onChangeText={(v) => setPassword(v)} />

      {/* Sign In Button */}
      {/* <Button text="Sign In" onPress={onSignInbtn} /> */}

      <TouchableOpacity
        onPress={onSignInbtn}
        style={[styles.button, loading && { backgroundColor: Colors.GRAY }]}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Pressable onPress={() => router.push('/(auth)/SignUp')}>
        <Text style={styles.signUpText}>
          New to CampusMinds? <Text style={styles.signUpLink}>Create Account</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30, // Moves content to top
    backgroundColor: '#f8f9fa',
    marginTop: 25,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20, // Reduced spacing
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 35,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    color: Colors.GRAY,
    textAlign: 'center',
    marginTop: 10,
  },
  signUpLink: {
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
