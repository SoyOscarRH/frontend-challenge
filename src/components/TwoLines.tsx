import React from 'react';
import styled from 'styled-components/native';

import {textSecondaryColor, fontFamily, black} from '../designSystem';

type Props = { title: string, subtitle: string}

const TwoLinesInfo: React.FC<Props> = ({title, subtitle}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.Text`
  color: ${textSecondaryColor};
  font-size: 12px;
  font-weight: 700;
  font-family: ${fontFamily};
  margin-bottom: 6px;
`;

const Subtitle = styled.Text`
  color: ${black};
  font-size: 16px;
  font-weight: 700;
  font-family: ${fontFamily};
`;

export default TwoLinesInfo;