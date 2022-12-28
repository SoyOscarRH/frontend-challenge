import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Message = {timestamp: string, text: string, sender: 'me' | 'yana'};
export type Messages = { messages: Array<[string, Array<Message>]>, IamAddingMessage: boolean };

const initialState = {
  messages: [
    [
      '2021-11-13', 
      [
        {timestamp: '1636825600000', text: 'Hola', sender: 'me'},
        {timestamp: '1636825600001', text: 'Hola humano', sender: 'yana'},
        {timestamp: '1636825600002', text: 'Esta es una demo, para mostrar como se ve la UI con mensajes antigüos', sender: 'me'},
      ]
    ],
  ], IamAddingMessage: false} as Messages;


const messagesSlice = createSlice({
  name: 'messagesData',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      console.log(action.payload);
      const date = new Date(Number(action.payload.timestamp));
      const day = date.toISOString().slice(0, 10);

      const dayMessages = state.messages.indexOf(state.messages.find(([key]) => key === day));
      if (dayMessages === -1) {
        state.messages.push([day, [action.payload]]);
      }
      else {
        state.messages[dayMessages][1].push(action.payload);
      }
      state.IamAddingMessage = false;
    },
    addingPendingMessageFromMe(state) {
      state.IamAddingMessage = true;
    },
    discardPendingMessageFromMe(state) {
      state.IamAddingMessage = false;
    },
    clearMessages(state) {
      state.messages = [];
      state.IamAddingMessage = false;
    }
  }
});

export const { addMessage, addingPendingMessageFromMe, discardPendingMessageFromMe, clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer;