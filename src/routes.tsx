import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import GoLive from './pages/GoLive';
import styled from 'styled-components/native';





import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();
const RedCircle = styled.View`
  background-color: ${colors.red};
  width: 20px;
  height: 20px;
  border-radius: 4.5px;
`;

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen name="Following" component={Following} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons
              name="compass-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
      <Screen name='Go Live' component={GoLive} options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <>
              <RedCircle />
              <Text> Go Live </Text>
            </>
          )
        }
      }}/>
      <Screen name="Browse" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons
              name="md-browsers"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
      <Screen name="Sports" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
