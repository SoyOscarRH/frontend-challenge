import React, {useEffect, useRef} from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import {  white, fontFamily, textPrimaryColor, backgroundColorGrey, backgroundColorGreen, fontFamilyAlternative} from '../../../designSystem';
import { useAppSelector } from '../../../redux/hooks';

const formatDateForUs = (date: Date = new Date()) => {
  const options = { weekday: 'short', day: 'numeric', 
    month: 'short', hour: 'numeric', minute: 'numeric', 
    hour12: true} as const;

  return date.toLocaleDateString('es-MX', options);
}; 

const Texts = () => {
  const {messages, IamAddingMessage, YanaAddingMessage} = useAppSelector(state => state.messages);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  }, [messages, IamAddingMessage, YanaAddingMessage]);

  return (
    <ConversationViewer ref={scrollViewRef}>
      {messages.map(([key, messagesOfTheDay]) => (
        <View key={key}>
          <DateText>{formatDateForUs(new Date(Number(messagesOfTheDay[0].timestamp)))}</DateText>
          {messagesOfTheDay.map(({text, sender, timestamp}) => (
            <Bubble key={timestamp} byMe={sender === 'me'}>
              <BubbleText byMe={sender === 'me'}>
                {text}
              </BubbleText>
            </Bubble>
          ))}
        </View>
      ))}
      {IamAddingMessage && <Bubble byMe><BubbleText byMe>...</BubbleText></Bubble>}
      {YanaAddingMessage && <Bubble><BubbleText>...</BubbleText></Bubble>}
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

const Bubble = styled.View<{byMe?: boolean}>`
  padding: 8px 16px;
  border-radius: 16px;
  margin-bottom: 8px;
  background-color: ${({byMe}) => byMe ? backgroundColorGreen : backgroundColorGrey};
  align-self: ${({byMe}) => byMe ? 'flex-end' : 'flex-start'};
`;

const BubbleText = styled.Text<{byMe?: boolean}>`
  font-family: ${fontFamily};
  font-size: 14px;
  color: ${({byMe}) => byMe ? white : textPrimaryColor};
`;

const DateText = styled.Text`
  margin-top: 24px;
  margin-bottom: 16px;
  font-family: ${fontFamily};
  font-size: 12px;
  color: ${textPrimaryColor};
  align-self: center;
  font-family: ${fontFamilyAlternative};
`;