import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceholderScreen = ({ name }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{name} Screen</Text>
        <Text style={styles.subtext}>Coming Soon</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    text: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    subtext: { fontSize: 16, color: '#666', marginTop: 8 }
});

// All major screens have been moved to dedicated files.
// This file is currently empty or used for minor future feature tabs.
export default PlaceholderScreen;
