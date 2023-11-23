import { Link, Tabs, Stack } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

export default () => {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[event]"
        options={{
          headerTransparent: true,
          headerTintColor: Colors.palette.text,
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
        }}
      />
    </Stack>
  );
}
