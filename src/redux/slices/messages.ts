import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Message = {timestamp: string, text: string, sender: 'me' | 'yana'};
export type Messages = { messages: Array<Message>, IamAddingMessage: boolean };

const messagesSlice = createSlice({
  name: 'messagesData',
  initialState: {messages: [], IamAddingMessage: false} as Messages,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
      state.IamAddingMessage = false;
    },
    addingPendingMessageFromMe(state) {
      state.IamAddingMessage = true;
    },
    discardPendingMessageFromMe(state) {
      state.IamAddingMessage = false;
    }
  }
});

export const { addMessage, addingPendingMessageFromMe, discardPendingMessageFromMe } = messagesSlice.actions;
export default messagesSlice.reducer;