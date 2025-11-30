import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SubjectScreen from './screens/SubjectScreen';
import MatchListScreen from './screens/MatchListScreen';
import ChatScreen from './screens/ChatScreen';
import { MatchProvider } from './context/MatchContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <MatchProvider>
        <NavigationContainer>{/* NavigationContainer manages nav state:contentReference[oaicite:4]{index=4} */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Subjects" component={SubjectScreen} />
            <Stack.Screen name="Matches" component={MatchListScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MatchProvider>
    </PaperProvider>
  );
}
