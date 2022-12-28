import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import Send from '../../../../assets/icons/Send';
import { textSecondaryColor, grey, textPrimaryColor, accentColor, fontFamily, white } from '../../../designSystem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addMessage, addingPendingMessageFromMe, discardPendingMessageFromMe} from '../../../redux/slices/messages';

const SendNewMessage = () => {
  const [message, setMessage] = useState('');
  const {IamAddingMessage} = useAppSelector(state => state.messages);

  const dispatch = useAppDispatch();
  const handleNewMessage = () => {
    dispatch(addMessage({text: message, sender: 'me'}));
    setMessage('');
  };

  useEffect(() => {
    if (IamAddingMessage && message === '') dispatch(discardPendingMessageFromMe());
    if (!IamAddingMessage && message !== '') dispatch(addingPendingMessageFromMe());
  }, [message, IamAddingMessage]);

  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  };

  return (
    <Composer>
      <ComposerInput 
        style={shadowStyle} 
        onChangeText={setMessage}
        onSubmitEditing={handleNewMessage}
        value={message} 
        placeholder='Ingresa aquí tu mensaje'
      />
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
  align-items: flex-end;
  margin: 0 16px;
`;

const ComposerInput = styled.TextInput.attrs({
  placeholderTextColor: textSecondaryColor
})`
  border-radius: 28px;
  padding: 20px 24px;
  outline-color: ${accentColor};
  font-family: ${fontFamily};
  flex-grow: 1;
  margin-right: 16px;
  color: ${textPrimaryColor};
  height: 56px;
  background-color: ${white};
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