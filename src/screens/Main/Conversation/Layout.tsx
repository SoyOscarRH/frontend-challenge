import React from 'react';
import styled from 'styled-components/native';
import SendNewMessage from './SendNewMessage';
import Texts from './Texts';


const Conversation = () => {
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
