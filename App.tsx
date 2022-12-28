import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {loadAsync} from 'expo-font';

import Challenge from './src';

export default function App() {
  const [attempedToLoadFont, setAttempedToLoadFont] = useState(false);
  useEffect(() => {
    const font = {'SF Pro Display': require('./assets/fonts/sf_pro_display.ttf')} as const;
    loadAsync(font)
      .finally(() => setAttempedToLoadFont(true));
  });

  if (!attempedToLoadFont) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContainer>
          <Challenge/>
        </AppContainer>
      </PersistGate>
    </Provider>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: #ecf0f1;
  align-items: center;
  justify-content: center;
`;

