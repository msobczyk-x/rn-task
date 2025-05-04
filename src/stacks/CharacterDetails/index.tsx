import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import type {CharacterDetailsStackParamList} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';

const Stack = createNativeStackNavigator<CharacterDetailsStackParamList>();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        component={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  );
};
