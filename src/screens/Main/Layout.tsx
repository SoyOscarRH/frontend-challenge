import * as React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Conversation from './Conversation';
import Account from './Account';

import {fontFamily, accentColor, textSecondaryColor} from '../../designSystem';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabsLayout>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 16, fontFamily, fontWeight: '700', textTransform: 'none' },
            tabBarActiveTintColor: accentColor,
            tabBarInactiveTintColor: textSecondaryColor,
            tabBarIndicatorStyle: { backgroundColor: accentColor, minHeight: 5 },
          }}
        >
          <Tab.Screen name="Chat" component={Conversation} />
          <Tab.Screen name="Cuenta" component={Account} />
        </Tab.Navigator>
      </TabsLayout>
    </NavigationContainer>
  );
}

const TabsLayout = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  font-family: 'SF Pro Display';
`;