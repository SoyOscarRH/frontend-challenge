import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';
import useYanaAutoAddingMessages from '../../../hooks/useYanaAutoAddingMessages';
import SendNewMessage from './SendNewMessage';
import Texts from './Texts';

const Conversation = () => {
  useYanaAutoAddingMessages({timeToPending: 2000, timeToSend: 6000});
  
  return (
    <ConversationLayout>
      <Texts />
      <KeyboardAvoidingView  keyboardVerticalOffset={128} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SendNewMessage />
      </KeyboardAvoidingView>
    </ConversationLayout>
  );
};

export default Conversation;

const ConversationLayout = styled.View`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding-bottom: 16px;
  transition: padding-bottom 3s;
`;
