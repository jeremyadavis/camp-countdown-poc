import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function SessionCountdownCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Camp A</Text>

        <View style={styles.sessionDetails}>
          <Text style={styles.sessionName}>Session X</Text>
          <Text>May 1 - May 7</Text>
        </View>
      </View>
      <View style={styles.countdown}>
        <Text>5 days</Text>
        <Text>22 hours</Text>
        <Text>7 minutes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  title: { fontSize: 20, fontWeight: 'bold' },
  sessionName: { fontSize: 18, fontWeight: 'bold' },
  sessionDetails: { flexDirection: 'column' },
  countdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
