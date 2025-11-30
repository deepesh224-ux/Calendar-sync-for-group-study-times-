import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useMatches } from '../context/MatchContext';

export default function HomeScreen({ navigation }) {
  const { mymatches } = useMatches();

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.welcomeText}>Welcome to Study Buddy Matcher!</Text>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Subjects')}
          style={styles.button}
        >
          Find Study Partners
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('AddStudySchedule')}
          style={styles.button}
        >
          Add Study Schedule
        </Button>
      </View>

      <Text variant="titleMedium" style={styles.sectionTitle}>My Schedules</Text>

      <FlatList
        data={mymatches}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No schedules added yet.</Text>}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.subject}</Text>
              <Text variant="bodyMedium">Name: {item.name}</Text>
              <Text variant="bodyMedium">Availability: {item.availability}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 24,
    gap: 12,
  },
  button: {
    borderRadius: 8,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: '600',
    color: '#555',
  },
  listContent: {
    paddingBottom: 16,
  },
  card: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontStyle: 'italic',
  },
});