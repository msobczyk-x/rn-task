import {Character, StarContained} from '@/components/icons';
import {TabBar} from '@/components/navigation/TabBar';
import {theme} from '@/constants/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{animation: 'shift'}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'All characters',
          tabBarIcon: () => <Character color={theme.colors.white} size={16} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Liked characters',
          tabBarIcon: () => (
            <StarContained color={theme.colors.white} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
