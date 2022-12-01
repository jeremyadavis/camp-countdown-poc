import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SessionCountdownCard from './SessionCountdownCard';

const sessions = [
  {
    campName: 'Camp A',
    sessionName: 'Session X',
    sessionStartDate: new Date('2023-05-01'),
    sessionEndDate: new Date('2023-05-10'),
  },
  {
    campName: 'Camp B',
    sessionName: 'Session Y',
    sessionStartDate: new Date('2023-06-10'),
    sessionEndDate: new Date('2023-06-13'),
  },
  {
    campName: 'Camp A',
    sessionName: 'Session Z',
    sessionStartDate: new Date('2023-06-11'),
    sessionEndDate: new Date('2023-07-22'),
  },
];

export default function CountdownsScreen({
  navigation,
}: RootTabScreenProps<'Countdowns'>) {
  return (
    <View style={styles.container}>
      <View style={styles.controls}></View>
      <View style={styles.sessionWrapper}>
        {sessions.map((session) => (
          <SessionCountdownCard {...session} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  controls: {
    height: 20,
  },
  sessionWrapper: {
    borderWidth: 1,
    borderColor: 'lime',
    margin: 5,
  },
});
