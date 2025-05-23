import {
    View, Text, SafeAreaView, StatusBar, StyleSheet,
    Image, TouchableOpacity, ScrollView, ActivityIndicator,
    ToastAndroid
} from 'react-native';
import React, { useContext, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/data/Colors';
import TextInputField from '@/components/Shared/TextInputField';
import Button from '@/components/Shared/Button';
import * as ImagePicker from 'expo-image-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';
import { upload } from 'cloudinary-react-native';
import { cld, options } from '@/configs/CloudinaryConfig';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { AuthContext } from '@/context/AuthContext';

export default function SignUp() {
    const [profileImage, setProfileImage] = useState<string | undefined>();
    const [fullName, setFullName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {user,setUser}=useContext(AuthContext);

    const onBtnPress = async () => {
        setLoading(true);

        if (!email || !password || !fullName || !profileImage) {
            ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM);
            setLoading(false);
            return;
        }

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created successfully:", userCredentials.user);

            if (profileImage) {
                await upload(cld, {
                    file: profileImage,
                    options: options,
                    callback: async (error: any, response: any) => {
                        if (error) {
                            console.log(error);
                            return;
                        }
                        if (response) {
                            console.log(response?.url);
                            await axios.post("http://192.168.205.77:8082/user", {
                                name: fullName,
                                email: email,
                                image: response?.url??''
                            });

                            setUser({
                                name: fullName,
                                email: email,
                                image: response?.url??''
                            })

                            router.push('/landing');
                        }
                    }
                });
            }

            ToastAndroid.show("Account created successfully!", ToastAndroid.BOTTOM);
        } catch (error: any) {
            console.error("Error during signup:", error);
            ToastAndroid.show(error.message, ToastAndroid.BOTTOM);
        }

        setLoading(false);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.heading}>Create New Account</Text>

                {/* Profile Image Picker */}
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
                        <Image
                            source={profileImage ? { uri: profileImage } : require('./../../assets/images/profile.png')}
                            style={styles.profileImage}
                        />
                        <Ionicons name="camera" size={24} color={Colors.PRIMARY} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <TextInputField label="Full Name" onChangeText={setFullName} />
                <TextInputField label="College Email" onChangeText={setEmail} />
                <TextInputField label="Password" password={true} onChangeText={setPassword} />

                {/* Create Account Button */}
                <TouchableOpacity
                    onPress={onBtnPress}
                    style={[styles.button, loading && { backgroundColor: Colors.GRAY }]}
                    disabled={loading}
                >
                    {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Create Account</Text>}
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageWrapper: {
        position: 'relative',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 2,
    },
    button: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
