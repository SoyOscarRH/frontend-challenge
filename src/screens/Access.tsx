import React from 'react';
import styled from 'styled-components/native';

const Access = () => {
  return (
    <AccessLayout>
      <Title>Regístrate</Title>
      <Inputs>
        <Input placeholder="Nombre de usuario" />
        <Input placeholder="Correo electrónico" keyboardType="email-address" />
        <Input placeholder="Contraseña" secureTextEntry />
      </Inputs>
      <Button onPress={() => console.log('sending')}>
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
  align-self: center;
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#00000080'
})`
  background: #F0F6FA;
  border-radius: 32px;
  padding: 20px 24px;
  outline-color: #FF8755;
  margin-bottom: 12px;
`;

const Button = styled.TouchableOpacity`
  background: #FF8755;
  border-radius: 32px;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #672A11;
  font-weight: 700;
`;