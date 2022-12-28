import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import Send from '../../../../assets/icons/Send';
import { textSecondaryColor, grey, textPrimaryColor, accentColor, fontFamily } from '../../../designSystem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addMessage, addingPendingMessageFromMe, discardPendingMessageFromMe, addingPendingMessageFromYana, discardPendingMessageFromYana } from '../../../redux/slices/messages';


const SendNewMessage = () => {
  const [message, setMessage] = useState('');
  const {messages, IamAddingMessage} = useAppSelector(state => state.messages);

  const dispatch = useAppDispatch();
  const handleNewMessage = () => {
    dispatch(addMessage({text: message, sender: 'me'}));
    setMessage('');
  };

  useEffect(() => {
    const lastMessageSender = messages.at(-1)?.[1]?.at(-1)?.sender;
    if (lastMessageSender !== 'me' || message !== '') return;
    
    let pendingDone = false, messageDone = false;

    const newPendingMessage = () => {
      pendingDone = true;
      dispatch(addingPendingMessageFromYana());
    };

    const newMessageFromYana = () => {
      messageDone = true;const texts = ['Hola humano, ¿Cómo estás?', 'Continua', 'Deberian contratar a Oscar 🫶'];
      const text = texts[Math.floor(Math.random() * texts.length)];
      dispatch(addMessage({text, sender: 'yana'}));
    };

    const pendingId = setTimeout(newPendingMessage, 2000);
    const messageId = setTimeout(newMessageFromYana, 6000);
    return () => {
      clearTimeout(messageId);
      clearTimeout(pendingId);
      if (pendingDone && !messageDone) dispatch(discardPendingMessageFromYana());
    };
  }, [messages, message]);

  useEffect(() => {
    if (IamAddingMessage && message === '') {
      dispatch(discardPendingMessageFromMe());
    }

    if (!IamAddingMessage && message !== '') {
      dispatch(addingPendingMessageFromMe());
    }
  }, [message, IamAddingMessage]);

  return (
    <Composer>
      <ComposerInput value={message} placeholder='Ingresa aquí tu mensaje' onChangeText={setMessage} />
      <IconButton active={message !== ''} onPress={handleNewMessage}>
        <Send />
      </IconButton>
    </Composer>
  );
};

export default SendNewMessage;

const Composer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 16px;
`;

const ComposerInput = styled.TextInput.attrs({
  placeholderTextColor: textSecondaryColor
})`
  border-radius: 28px;
  padding: 20px 24px;
  outline-color: ${accentColor};
  font-family: ${fontFamily};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  flex-grow: 1;
  margin-right: 16px;
  color: ${textPrimaryColor};
`;

const IconButton = styled.TouchableOpacity<{active: boolean}>`
  background-color: ${({active}) => active ? accentColor : grey};
  border-radius: 32px;
  padding: 8px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;