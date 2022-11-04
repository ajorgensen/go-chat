import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import ChatHistory from './components/ChatHistory';
import { connect, sendMsg } from "./api"
import ChatInput from './components/ChatInput';

export interface Chat {
  message: string;
}

function App() {
  const [ history, setHistory ] = useState<Chat[]>([]);

  useEffect(() => { connect((msg: MessageEvent) => {
    console.log("New Message")
    console.log(msg)
    setHistory([...history, { message: msg.data }])
  }) }, [history, setHistory])

  const send = (msg: string) => {
    sendMsg(msg)
  }

  const clear = () => {
    setHistory([])
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory history={history}></ChatHistory>
      <ChatInput send={send}></ChatInput>

      <button onClick={clear}>Clear</button>
    </div>
  );
}

// <button onClick={send}>Hit</button>
export default App;
