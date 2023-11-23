import { Stack } from 'expo-router';
import Colors from '../../../../constants/Colors';
import StyledText from '../../../../components/common/StyledText';

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Search events",
          headerTransparent: true,
          headerTintColor: Colors.palette.ash,
          headerTitleStyle: {
            fontSize: 20,
          }
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTransparent: true,
          headerTintColor: Colors.palette.lightPurple,
        }}
      />
      <Stack.Screen
        name="filter"
        options={{
          title: "Filter",
          presentation: "modal",
          headerTransparent: true,
          headerTintColor: Colors.palette.lightPurple,
        }}
      />
    </Stack>
  );
}
