import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png';
import './infobar.css';


const Infobar = (props) => {
  return (
    <div className='d-flex align-item-center justify-content-between p-3 mb-2 bg-info text-white infoBar'>
    <div className='d-flex align-items-center ml-5 text-white customFlex'>
    <img className='mx-2' src={onlineIcon} alt='online' />
    <h3>{props.room}</h3>
    </div>
      <div className='d-flex justify-content-end mr-5 customFlex' >
      <a href='/'><i className="fa-solid fa-xmark text-white"/></a>

      </div>
    </div>
  )
}

export default Infobar
