import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';
import {loadAsync} from 'expo-font';

import Challenge from './src';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [attempedToLoadFont, setAttempedToLoadFont] = useState(false);
  useEffect(() => {
    const font = {
      'SF Pro Display': require('./assets/fonts/sf_pro_display.ttf'),
      'Raleway': require('./assets/fonts/raleway.ttf'),
    } as const;
    loadAsync(font)
      .finally(() => setAttempedToLoadFont(true));
  });

  const onLayoutRootView = useCallback(async () => {
    if (attempedToLoadFont) {
      await SplashScreen.hideAsync();
    }
  }, [attempedToLoadFont]);
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContainer onLayout={onLayoutRootView}>
          <Challenge/>
        </AppContainer>
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

