import React, { useState } from 'react';
import styled from 'styled-components/native';
import {useAppDispatch} from '../redux/hooks';
import {setUserData} from '../redux/slices/userData';

import {negativeAccentColor, fontFamily, accentColor, textSecondaryColor, backgroundColorGrey} from '../designSystem';

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
      <Button onPress={handleRegister}>
        <ButtonText>
          Crear cuenta
        </ButtonText>
      </Button>
    </AccessLayout>
  );
};

export default Access;

const AccessLayout = styled.View`
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

const Button = styled.TouchableOpacity`
  background: ${accentColor};
  border-radius: 32px;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: ${negativeAccentColor};
  font-weight: 700;
  font-family: ${fontFamily};
`;