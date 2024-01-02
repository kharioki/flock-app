import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '../../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.palette.primary,
        tabBarInactiveTintColor: Colors.palette.lightGray,
        tabBarIconStyle: {
          // marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: Colors.palette.card,
          borderTopColor: Colors.palette.card,
          position: 'absolute',
          alignItems: 'center',
          height: 65,
          bottom: 16,
          right: 30,
          left: 30,
          borderRadius: 40,
          padding: 8
        }
      }}>
      <Tabs.Screen
        name="main"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="dynamic-feed" color={color} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="star-outline" color={color} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
    </Tabs>
  );
}
