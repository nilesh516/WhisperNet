import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './messages.css'

const Messages = (props) => {
  return (
    <ScrollToBottom className='messages'>
    {props.messages.map((message, i) => 
    <div key={i}><Message message={message} name={props.name} /></div>
    )}
    </ScrollToBottom>
      
   
  )
}

export default Messages
