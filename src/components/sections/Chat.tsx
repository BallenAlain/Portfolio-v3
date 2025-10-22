'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

const Chat = () => {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');

  return (
    <div className='w-full overflow-hidden h-full max-w-4xl justify-between mx-auto p-4 flex flex-col'>
      <h1 className='text-2xl font-bold text-center mb-4'>Meet Jim</h1>
      <div className='flex-1 overflow-auto mb-4 h-screen'>
        {messages.map(message => (
          <div key={message.id} className='mb-2'>
            <strong className='mr-2'>{message.role === 'user' ? 'User:' : 'AI:'}</strong>
            {message.parts.map((part, index) =>
              part.type === 'text' ? <span key={index}>{part.text}</span> : null,
            )}
          </div>
        ))}
      </div>

      <form
        className='flex gap-2 items-center'
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput('');
          }
        }}
      >
        <input
          className='flex-1 px-3 py-2 rounded'
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={status !== 'ready'}
          placeholder="Say something..."
        />
        <button className='px-4 py-2 rounded bg-accent' type="submit" disabled={status !== 'ready'}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Chat;