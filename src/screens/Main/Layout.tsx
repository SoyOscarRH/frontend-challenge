import * as React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Conversation from './Conversation';
import Account from './Account';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabsLayout>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '700', textTransform: 'none' },
            tabBarActiveTintColor: '#FF8755',
            tabBarInactiveTintColor: '#00000080',
            tabBarIndicatorStyle: { backgroundColor: '#FF8755', minHeight: '0.3rem' },
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