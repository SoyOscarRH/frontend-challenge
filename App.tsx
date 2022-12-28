import React, {useState, useCallback} from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';
import {loadAsync} from 'expo-font';

import Challenge from './src';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [attempedToLoadFont, setAttempedToLoadFont] = useState(false);
  const onLayoutRootView = useCallback(async () => {
    try {
      const font = {
        'SF Pro Display': require('./assets/fonts/sf_pro_display.ttf'),
        'Raleway': require('./assets/fonts/raleway.ttf'),
      } as const;
  
      await loadAsync(font);
      await SplashScreen.hideAsync();
      setAttempedToLoadFont(true);
    }
    catch (e) {
      console.warn(e);
    }
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          <AppContainer onLayout={onLayoutRootView}>
            {attempedToLoadFont ? <Challenge/> : null}
          </AppContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05rem;
`;

