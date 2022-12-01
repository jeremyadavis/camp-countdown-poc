import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SessionCountdownCard from './SessionCountdownCard';

export default function CountdownsScreen({
  navigation,
}: RootTabScreenProps<'Countdowns'>) {
  return (
    <View style={styles.container}>
      <View style={styles.controls}></View>
      <View style={styles.sessionWrapper}>
        <SessionCountdownCard />
        <SessionCountdownCard />
        <SessionCountdownCard />
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
