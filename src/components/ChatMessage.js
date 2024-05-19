import React from 'react'
import { user_icon } from '../Utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div>
        <div className='flex items-center shadow-sm p-2'>
            <img src={user_icon} className='h-8' alt="user_icon" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage