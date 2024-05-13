import React from 'react'
import { menu_icon, user_icon, youtube_logo } from '../Utils/constants'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Head = () => {
  const dispath = useDispatch();
  const handleMenu = () => {
    dispath(toggleMenu());
  }

  return (
   <div className='grid grid-flow-col px-5 py-2 mb-2 shadow-lg bg-white' id="header">
        <div className='flex items-center col-span-1'> 
            <img src={menu_icon} className='h-8 cursor-pointer' alt="menu" onClick={handleMenu} />
            <img src={youtube_logo} className='h-10 mx-2 cursor-pointer' alt="youtube_logo" />
        </div>
        <div className='col-span-10 flex items-center'>
            <input type='text' className='h-10 p-2 rounded w-[80%] border border-gray-200 rounded-l-full focus:border-yellow-600' placeholder='Search'/>
            <div className='bg-gray-200 p-4 h-10 flex items-center justify-center rounded-r-full'>
            <FontAwesomeIcon className='w-9 h-7 font-light search-icon cursor-pointer' icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className='col-span-1 flex items-center    '>
        <img src={user_icon} className='h-10' alt="user_icon" />
        </div>
   </div>
  )
}

export default Head