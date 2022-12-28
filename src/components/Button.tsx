import React from 'react';
import styled from 'styled-components/native';

import {negativeAccentColor, fontFamily, accentColor} from '../designSystem';

type Props = { onPress: () => void; title: string; }

const Button: React.FC<Props> = ({onPress, title}) => {
  return (
    <ButtonView onPress={onPress}>
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonView>
  );
};

export default Button;

const ButtonView = styled.TouchableOpacity`
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