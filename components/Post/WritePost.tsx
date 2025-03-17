import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import React, { useContext, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../Shared/Button';
import * as ImagePicker from 'expo-image-picker';
import { upload } from 'cloudinary-react-native';
import { cld, options } from '@/configs/CloudinaryConfig';
import axios from 'axios';
import { AuthContext } from '@/context/AuthContext';

export default function WritePost() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [content, setContent] = useState<string | null>();
    const {user} = useContext(AuthContext);
    const [loading,setLoading]= useState(false);
    const [items, setItems] = useState([
        { label: 'Public', value: 'Public' },
        { label: 'Developer', value: 'Developer' },
    ]);

    const onPostBtn = async () => {

        if (!content) {
            ToastAndroid.show("Please enter content", ToastAndroid.BOTTOM);
            return;
        }
        setLoading(true);

        //Upload Image
        let uploadImageUrl=''
        if (selectedImage) {
            const resultData:any = await new Promise(async (resolve, reject) => {
                await upload(cld, {
                    file: selectedImage,
                    options: options,
                    callback: (error: any, response: any) => {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(response)
                        }
                    }
                })
            });
            uploadImageUrl=resultData&&resultData?.url
        }
        // console.log("Uploaded Image URL:", uploadImageUrl);

        const result = await axios.post('http://192.168.205.77:8082/post',{
            content:content,
            imageUrl:uploadImageUrl,
            visibleIn:value,
            email:user?.email
        });
        console.log(result.data);
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
            setSelectedImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.postContainer}>
            <TextInput
                placeholder='Write your post here..'
                style={styles.textInput}
                multiline
                numberOfLines={5}
                maxLength={1000}
                onChangeText={(value) => setContent(value)}
            />
            <DropDownPicker
                items={items}
                open={open}
                value={value}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
            />

            <TouchableOpacity onPress={pickImage} style={styles.addImageButton}>
                <Text style={styles.addImageText}>+ Add Image</Text>
            </TouchableOpacity>


            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.fullImagePreview} />
            )}

            <Button text='Post' onPress={onPostBtn} loading={loading} />
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        marginTop: 15,
    },
    textInput: {
        padding: 15,
        backgroundColor: '#fff',
        height: 140,
        marginTop: 10,
        borderRadius: 15,
        textAlignVertical: 'top',
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    addImageButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    addImageText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        borderWidth: 0,
        elevation: 2,
        marginTop: 15,
    },
    dropdownContainer: {
        borderWidth: 0,
        elevation: 2,
    },
    fullImagePreview: {
        width: '100%',
        height: 300,
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: '#ccc',
    },
    postButton: {
        marginTop: 20,
        backgroundColor: '#28a745',
        borderRadius: 10,
    },
});
