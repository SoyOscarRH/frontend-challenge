import React, { useState } from 'react';
import styled from 'styled-components/native';
import {useAppDispatch} from '../redux/hooks';
import {setUserData} from '../redux/slices/userData';

import {fontFamily, accentColor, textSecondaryColor, backgroundColorGrey} from '../designSystem';
import Button from '../components/Button';
import { KeyboardAvoidingView } from 'react-native';

const Access = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const handleRegister = () => dispatch(setUserData({username, email}));

  return (
    <AccessLayout>
      <Title>Regístrate</Title>
      <Inputs>
        <Input value={username} placeholder="Nombre de usuario" onChangeText={setUsername} />
        <Input value={email} placeholder="Correo electrónico" onChangeText={setEmail} keyboardType="email-address" />
        <Input placeholder="Contraseña" secureTextEntry />
      </Inputs>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
        <Button mode="primary" onPress={handleRegister} title="Crear cuenta" />
      </KeyboardAvoidingView>
    </AccessLayout>
  );
};

export default Access;

const AccessLayout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  padding-top: 0px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Title = styled.Text`
  margin-top: 68px;
  margin-bottom: 48px;
  font-size: 24px;
  font-weight: 700;
  font-family: ${fontFamily};
  align-self: center;
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: textSecondaryColor
})`
  background: ${backgroundColorGrey};
  border-radius: 32px;
  padding: 20px 24px;
  outline-color: ${accentColor};
  margin-bottom: 12px;
  font-family: ${fontFamily};
`;
