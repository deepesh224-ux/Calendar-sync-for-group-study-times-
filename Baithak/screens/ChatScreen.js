import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function ChatScreen({ route }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { match } = route.params;
  const sendMessage = (msg) => {
    setMessages([...messages, { text: msg, sender: 'You' }]);
    setMessage('');
  };
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ alignItems: 'center', marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 8 }}>
        <Text variant="titleLarge">{match.name}</Text>
      </View>

      <FlatList
        data={messages}
        style={{ flex: 1, marginBottom: 16 }}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 4 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.sender}: </Text>{item.text}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          mode="outlined"
          style={{ flex: 1, marginRight: 8 }}
          placeholder="Enter message"
          value={message}
          onChangeText={setMessage}
        />
        <Button mode="contained" onPress={() => { sendMessage(message) }}>
          Send
        </Button>
      </View>
    </View>
  );
}