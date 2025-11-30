import React from 'react';
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';

const dummyMatches = [
  { name: 'Alice', subject: 'Math', availability: 'Mon 5pm' },
  { name: 'Bob', subject: 'Math', availability: 'Wed 3pm' },
  { name: 'Carol', subject: 'History', availability: 'Tue 2pm' },
];

export default function MatchListScreen({ navigation, route }) {
  const { subject, schedule } = route.params;
  const filteredMatches = dummyMatches.filter((match) => match.subject.toLowerCase() === subject.toLowerCase() && match.availability.toLowerCase() === schedule.toLowerCase());
  // TODO: Filter dummyMatches by subject/schedule if needed
  return (
    <FlatList
      data={filteredMatches}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 8 }} onPress={() => navigation.navigate('Chat', { match: item })}>
          <Card.Title title={item.name} subtitle={`${item.subject} • ${item.availability}`} />
          <Card.Content>
            <Text variant="bodyMedium">Send message or connect</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}