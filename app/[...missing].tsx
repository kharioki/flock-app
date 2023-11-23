import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import StyledText from '../components/common/StyledText';
import MainContainer from '../components/containers/MainContainer';

export default function NotFoundScreen() {
  return (
    <MainContainer>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <StyledText style={styles.title}>This screen doesn't exist.</StyledText>

        <Link href="/" style={styles.link}>
          <StyledText style={styles.linkText}>Go to home screen!</StyledText>
        </Link>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
