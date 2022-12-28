import React from 'react';
import styled from 'styled-components/native';

import {negativeAccentColor, alternativeAccentColor, negativeAlternativeAccentColor, fontFamily, accentColor} from '../designSystem';

type Props = { onPress: () => void; title: string; mode: 'primary' | 'alternative'}

const Button: React.FC<Props> = ({onPress, title, mode}) => {
  return (
    <ButtonView onPress={onPress} mode={mode}>
      <ButtonText mode={mode}>
        {title}
      </ButtonText>
    </ButtonView>
  );
};

export default Button;

const ButtonView = styled.TouchableOpacity<{mode: Props['mode']}>`
  background: ${props => props.mode === 'primary' ? accentColor : alternativeAccentColor};
  border-radius: 32px;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.Text<{mode: Props['mode']}>`
  font-size: 16px;
  color: ${props => props.mode === 'primary' ? negativeAccentColor : negativeAlternativeAccentColor};
  font-weight: 700;
  font-family: ${fontFamily};
  justify-self: flex-end;
`;