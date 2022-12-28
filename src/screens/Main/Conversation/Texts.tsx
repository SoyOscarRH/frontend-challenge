import React from 'react';
import styled from 'styled-components/native';

import {  white, fontFamily, textPrimaryColor, backgroundColorGrey, backgroundColorGreen} from '../../../designSystem';
import { useAppSelector } from '../../../redux/hooks';

const formatDateForUs = (date: Date = new Date()) => {
  const options = { weekday: 'short', day: 'numeric', 
    month: 'short', hour: 'numeric', minute: 'numeric', 
    hour12: true} as const;

  return new Intl.DateTimeFormat('es-MX', options).format(date);
}; 

const Texts = () => {
  const {messages, IamAddingMessage} = useAppSelector(state => state.messages);

  return (
    <ConversationViewer>
      <Spacer />
      <DateText>{formatDateForUs()}</DateText>
      <Bubble>Hola humano, ¿Cómo estás?</Bubble>
      <Bubble byMe>message 1</Bubble>
      <Bubble >message 3</Bubble>
      {messages.map(({timestamp, text, sender}) => (
        <Bubble key={timestamp} byMe={sender === 'me'}>{text}</Bubble>
      ))}
      {IamAddingMessage && <Bubble byMe>...</Bubble>}
    </ConversationViewer>
  );
};

export default Texts;

const ConversationViewer = styled.ScrollView`
  flex-grow: 1;
  padding: 0 12px;
  margin: 0 4px;
  margin-bottom: 16px;
`;

const Spacer = styled.View`
  height: 16px;
`;

const Bubble = styled.Text<{byMe?: boolean}>`
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 8px;
  font-family: ${fontFamily};
  font-size: 14px;
  color: ${({byMe}) => byMe ? white : textPrimaryColor};
  background-color: ${({byMe}) => byMe ? backgroundColorGreen : backgroundColorGrey};
  align-self: ${({byMe}) => byMe ? 'flex-end' : 'flex-start'};
`;

const DateText = styled.Text`
  margin-bottom: 16px;
  font-family: ${fontFamily};
  font-size: 12px;
  color: ${textPrimaryColor};
  align-self: center;
`;