import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addingPendingMessageFromYana, addMessage, discardPendingMessageFromYana } from '../redux/slices/messages';

const useYanaAutoAddingMessages = ({timeToPending, timeToSend} : {timeToPending: number, timeToSend: number}) => {
  const dispatch = useAppDispatch();
  const {IamAddingMessage, messages} = useAppSelector(state => state.messages);

  useEffect(() => {
    const lastMessageSender = messages.at(-1)?.[1]?.at(-1)?.sender;
    if (lastMessageSender !== 'me' || IamAddingMessage) return;
    
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

    const pendingId = setTimeout(newPendingMessage, timeToPending);
    const messageId = setTimeout(newMessageFromYana, timeToSend);
    return () => {
      clearTimeout(messageId);
      clearTimeout(pendingId);
      if (pendingDone && !messageDone) dispatch(discardPendingMessageFromYana());
    };
  }, [messages, IamAddingMessage]);
};

export default useYanaAutoAddingMessages;