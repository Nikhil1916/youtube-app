import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';

const WatchPage = () => {
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(closeMenu());
    },[])
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage