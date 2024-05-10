import React from 'react'
import { menu_icon, search_icon, user_icon, youtube_logo } from '../Utils/constants'

const Head = () => {
  return (
   <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex items-center col-span-1'> 
            <img src={menu_icon} className='h-10' alt="menu" />
            <img src={youtube_logo} className='h-20 mx-2' alt="youtube_logo" />
        </div>
        <div className='col-span-10 flex items-center items-stretch h-12'>
            <input type='text' className='p-2 rounded w-[80%] border border-gray-200 rounded-l-2xl' placeholder='search'/>
            <div className='bg-gray-200 w-18 p-2'>
                <img src={search_icon} className='h-10' alt="youtube_logo" /> 
            </div>
        </div>
        <div className='col-span-1'>
        <img src={user_icon} className='h-10' alt="user_icon" />
        </div>
   </div>
  )
}

export default Head