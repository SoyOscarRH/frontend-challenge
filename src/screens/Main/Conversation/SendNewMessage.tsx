import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import Send from '../../../../assets/icons/send';
import { textSecondaryColor, grey, textPrimaryColor, accentColor, fontFamily } from '../../../designSystem';
import { useAppDispatch } from '../../../redux/hooks';
import { addMessage, addingPendingMessageFromMe, discardPendingMessageFromMe } from '../../../redux/slices/messages';


const SendNewMessage = () => {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const handleNewMessage = () => {
    const timestamp = new Date().getTime().toString();
    dispatch(addMessage({text: message, sender: 'me', timestamp}));
    setMessage('');
  };

  useEffect(() => {
    dispatch(message !== '' ? addingPendingMessageFromMe() : discardPendingMessageFromMe());
  }, [message]);

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