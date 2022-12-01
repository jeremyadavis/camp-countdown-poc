import { StyleSheet } from 'react-native';
import Countdown from 'react-countdown';

import { Text, View } from '../components/Themed';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Text>done</Text>;
  } else {
    // Render a countdown
    return (
      <Text>
        {days}:{hours}:{minutes}:{seconds}
      </Text>
    );
  }
};

type Props = {
  campName: string;
  sessionName: string;
  sessionStartDate: Date;
  sessionEndDate: Date;
};

export default function SessionCountdownCard({
  campName,
  sessionName,
  sessionStartDate,
  sessionEndDate,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{campName}</Text>

        <View style={styles.sessionDetails}>
          <Text style={styles.sessionName}>{sessionName}</Text>
          <Text>
            {months[sessionStartDate.getMonth()]} {sessionStartDate.getDate()} -{' '}
            {months[sessionEndDate.getMonth()]} {sessionEndDate.getDate()}
          </Text>
        </View>
      </View>

      <View style={styles.countdown}>
        <Countdown date={sessionStartDate.toISOString()} renderer={renderer} />
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
