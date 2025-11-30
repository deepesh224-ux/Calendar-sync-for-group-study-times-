import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function ChatScreen({ route }) {
  const { match } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text variant="titleLarge">Chat Feature</Text>
      <Text variant="bodyMedium">(Coming soon: in-app chat interface)</Text>
    </View>
  );
}