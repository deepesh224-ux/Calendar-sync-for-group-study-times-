import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useMatches } from '../context/MatchContext';

export default function AddStudySchedule({ navigation }) {
    const [subject, setSubject] = React.useState('');
    const [availability, setAvailability] = React.useState('');
    const [name, setName] = React.useState('');
    const { addMatch } = useMatches();

    const handleAdd = () => {
        addMatch({ name, subject, availability });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>Add Study Schedule</Text>
            <TextInput
                label="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Subject"
                value={subject}
                onChangeText={setSubject}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Availability"
                value={availability}
                onChangeText={setAvailability}
                style={styles.input}
                mode="outlined"
                placeholder="e.g., Mon 5pm"
            />
            <Button mode="contained" onPress={handleAdd} style={styles.button}>
                Add Schedule
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        marginBottom: 24,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
        paddingVertical: 6,
    },
});