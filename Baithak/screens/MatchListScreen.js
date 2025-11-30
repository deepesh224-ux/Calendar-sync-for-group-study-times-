import React from 'react';
import { FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { useMatches } from '../context/MatchContext';

export default function MatchListScreen({ navigation, route }) {
  const { matches, mymatches } = useMatches();
  const { subject, schedule } = route.params;

  const filteredMatches = matches.filter((match) => {
    const isMyMatch = mymatches.some(
      (myMatch) =>
        myMatch.name === match.name &&
        myMatch.subject === match.subject &&
        myMatch.availability === match.availability
    );
    if (isMyMatch) return false;

    const matchesSubject = !subject || match.subject.toLowerCase() === subject.toLowerCase();
    const matchesSchedule = !schedule || match.availability.toLowerCase() === schedule.toLowerCase();

    return matchesSubject && matchesSchedule;
  });
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