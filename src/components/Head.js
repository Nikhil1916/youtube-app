import React from 'react'
import { menu_icon, search_icon, user_icon, youtube_logo } from '../Utils/constants'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Head = () => {
  return (
   <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex items-center col-span-1'> 
            <img src={menu_icon} className='h-10' alt="menu" />
            <img src={youtube_logo} className='h-20 mx-2' alt="youtube_logo" />
        </div>
        <div className='col-span-10 flex items-center'>
            <input type='text' className='h-12 p-2 rounded w-[80%] border border-gray-200 rounded-l-full' placeholder='Search'/>
            <div className='bg-gray-200 p-4 h-12 flex items-center justify-center rounded-r-full'>
            <FontAwesomeIcon className='w-9 h-7 font-light search-icon' icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className='col-span-1 flex items-center    '>
        <img src={user_icon} className='h-10' alt="user_icon" />
        </div>
   </div>
  )
}

export default Head