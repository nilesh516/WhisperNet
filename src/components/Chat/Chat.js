import React, { useState, useEffect,useRef } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router';
import './chat.css'
import Infobar from '../InfoBar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;
const Chat = () => {
  const location = useLocation();
  const messageEndRef = useRef(null);
  const [hideScrollbar, setHideScrollbar] = useState(false);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://whispernet-server.onrender.com/';


  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.close();
    }

  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    messageEndRef.current.scrollIntoView({behavior:'smooth'})
    setHideScrollbar(true);
  }, [messages]);

  // function for sending message.

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
    setTimeout(()=>{
      setHideScrollbar(false)
    },3000)

  }
  console.log(message, messages);

  return (
    <div className='outerContainer'>
      <div className='container'>
        <Infobar room={room} />
        <div className={`scrollable-messages ${hideScrollbar} ? hide-scrollbar : ''`}>
          <Messages messages={messages} name={name} />
        <div ref={messageEndRef} />
        </div>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>

    </div>
  )
}

export default Chat
