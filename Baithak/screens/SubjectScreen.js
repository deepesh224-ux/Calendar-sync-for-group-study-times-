import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SubjectScreen({ navigation }) {
  const [subject, setSubject] = useState('');
  const [schedule, setSchedule] = useState('');

  return (
    <View style={{ flex:1, padding: 16 }}>
      <TextInput
        label="Subject"
        value={subject}
        onChangeText={setSubject}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Schedule (e.g. Mon 5pm)"
        value={schedule}
        onChangeText={setSchedule}
        style={{ marginBottom: 16 }}
      />
      <Button mode="contained" onPress={() => navigation.navigate('Matches', { subject, schedule })}>
        Show Matches
      </Button>
    </View>
  );
}
