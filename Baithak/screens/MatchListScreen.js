import React from 'react';
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';

const dummyMatches = [
  { name: 'Alice', subject: 'Math', availability: 'Mon 5pm' },
  { name: 'Bob', subject: 'Math', availability: 'Wed 3pm' },
  { name: 'Carol', subject: 'History', availability: 'Tue 2pm' },
];

export default function MatchListScreen({ route }) {
  const { subject, schedule } = route.params;
  // TODO: Filter dummyMatches by subject/schedule if needed
  return (
    <FlatList
      data={dummyMatches}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 8 }}>
          <Card.Title title={item.name} subtitle={`${item.subject} • ${item.availability}`} />
          <Card.Content>
            <Text variant="bodyMedium">Send message or connect</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}