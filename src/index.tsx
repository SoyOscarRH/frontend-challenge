import React from 'react';
import Access from './screens/Access';
import Main from './screens/Main';
import {useAppSelector} from './redux/hooks';

const Challenge = () => {
  const username = useAppSelector((state) => state.userData.data?.username);
  return username == null ? <Access/> : <Main />;
};

export default Challenge;
