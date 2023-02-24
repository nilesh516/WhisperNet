import React from 'react'

import './input.css'

const Input = (props) => {
  return (
    <div>
    <nav>
    <form className='form'>
    <input className='input' type='text' placeholder='Type a message...'
     value={props.message}
     onChange={(event)=> props.setMessage(event.target.value)} />
    <button className='sendButton' onClick={(event) => props.sendMessage(event)}><i className="fa-regular fa-paper-plane"></i> </button>
    </form>
    </nav>
    </div>
  )
}

export default Input
