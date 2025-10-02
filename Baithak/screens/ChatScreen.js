import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function ChatScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:16 }}>
      <Text variant="titleLarge">Chat Feature</Text>
      <Text variant="bodyMedium">(Coming soon: in-app chat interface)</Text>
    </View>
  );
}