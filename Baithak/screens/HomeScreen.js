import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="titleLarge">Welcome to Study Buddy Matcher!</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Subjects')} style={{ marginTop: 20 }}>
        Find Study Partners
      </Button>
    </View>
  );
}