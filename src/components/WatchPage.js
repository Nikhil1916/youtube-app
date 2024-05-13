import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(closeMenu());
    },[]);
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));
  return (
    <div className='aspect-video flex items-center justify-center mx-10 mt-16'>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")+"?loop=1&mute=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default WatchPage