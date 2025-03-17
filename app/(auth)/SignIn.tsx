import { View, Text, Image, Pressable, StyleSheet, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import TextInputField from '@/components/Shared/TextInputField';
import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';
import Colors from '@/data/Colors';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');

  const onSignInbtn = () => {

    if(!email || !password){
      ToastAndroid.show('enter email and password', ToastAndroid.BOTTOM)
      return ;
    }

    signInWithEmailAndPassword(auth,email,password)
    .then(resp=>{
      if(resp.user){
        console.log(resp.user?.email)
        //API call to fetch user data
      }

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
      <Button text="Sign In" onPress={onSignInbtn} />

      {/* Sign Up Link */}
      <Pressable onPress={() => router.push('/(auth)/SignUp')}>
        <Text style={styles.signUpText}>
          New to CampusMinds? <Text style={styles.signUpLink}>Create New Account</Text>
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
    marginTop: 15,
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
});
