import React from 'react';
import styled from 'styled-components/native';
import { backgroundColorGrey } from '../../designSystem';
import { useGetAvatar } from '../../hooks/useGetAvatar';

import Button from '../../components/Button';
import TwoLinesInfo from '../../components/TwoLines';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slices/userData';
import { clearMessages } from '../../redux/slices/messages';

const Account = () => {
  const dispatch = useAppDispatch();
  const onPress = () => {
    dispatch(clearMessages());
    dispatch(logout());
  };
  const userAvatar = useGetAvatar('user');
  const data = useAppSelector(state => state.userData.data);

  return (
    <AccountLayout>
      <Grower>
        <ProfilePhoto source={userAvatar} />
        <TwoLinesInfo title="Nombre de usuario" subtitle={data.username} />
        <TwoLinesInfo title="Correo electrónico" subtitle={data.email} />
      </Grower>
      <Button mode="alternative" onPress={onPress} title="Cerrar Sesión" />
    </AccountLayout>
  );
};

export default Account;

const AccountLayout = styled.View`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Grower = styled.View`
  flex-grow: 1;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 96px;
  height: 96px;
  margin: 48px 0px;
  background-color: ${backgroundColorGrey};
  background-opacity: 50%;
  border-radius: 48px;
`;
