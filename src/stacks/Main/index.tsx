import {Header} from '@/components/navigation/Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CharacterDetailsStack} from '../CharacterDetails';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackRoutes} from './Main.routes';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'simple_push',
      }}
      layout={({children}) => (
        <View style={styles.layoutContainer}>
          <Header />
          {children}
        </View>
      )}>
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
});
