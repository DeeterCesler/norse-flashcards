import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ width }) => {
    return (
        <TouchableOpacity style={[styles.button, { width }]} onPress={() => console.log('Button pressed')}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#412e29',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});

export default SubmitButton;
