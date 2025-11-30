import React from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useMatches } from '../context/MatchContext';

export default function AddStudySchedule() {
    const [subject, setSubject] = React.useState('');
    const [availability, setAvailability] = React.useState('');
    const [name, setName] = React.useState('');
    const { addMatch } = useMatches();
    return (
        <View>
            <Text>Add Study Schedule</Text>
            <TextInput label="Name" value={name} onChangeText={setName} />
            <TextInput label="Subject" value={subject} onChangeText={setSubject} />
            <TextInput label="Availability" value={availability} onChangeText={setAvailability} />
            <Button mode="contained" onPress={() => { addMatch({ name, subject, availability }) }}>Add</Button>
        </View>
    );
}