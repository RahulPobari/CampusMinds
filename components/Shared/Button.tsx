import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import Colors from '@/data/Colors';

type ButtonProps = {
    text: string;
    onPress: () => void;
    loading?: boolean
};

export default function Button({ text, onPress, loading = false }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {loading ? <ActivityIndicator size={'large'} color={Colors.WHITE} /> :
                <Text style={styles.buttonText}>{text}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        backgroundColor: Colors.PRIMARY,
        marginTop: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
