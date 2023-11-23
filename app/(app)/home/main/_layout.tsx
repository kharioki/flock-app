import { Stack } from 'expo-router';
import Colors from '../../../../constants/Colors';
import StyledText from '../../../../components/common/StyledText';

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="section"
        options={{
          headerTransparent: true,
          headerTintColor: Colors.palette.primary,
        }}
      />
    </Stack>
  );
}
