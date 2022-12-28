import React from 'react';
import styled from 'styled-components/native';
import useYanaAutoAddingMessages from '../../../hooks/useYanaAutoAddingMessages';
import SendNewMessage from './SendNewMessage';
import Texts from './Texts';


const Conversation = () => {
  useYanaAutoAddingMessages({timeToPending: 2000, timeToSend: 6000});
  return (
    <ConversationLayout>
      <Texts />
      <SendNewMessage />
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
`;
