import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Access from './screens/Access';
import Main from './screens/Main';
import {useAppSelector} from './redux/hooks';

const Challenge = () => {
  const username = useAppSelector((state) => state.userData.data?.username);
  return (
    <SafeAreaView style={{ height: '100%', width: '100%'}}>
      {username == null ? <Access/> : <Main />}
    </SafeAreaView>
  );
};

export default Challenge;
