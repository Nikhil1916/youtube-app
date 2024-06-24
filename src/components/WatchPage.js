import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(closeMenu());
        window.scroll(0,0);
    },[]);
    const [searchParam] = useSearchParams();
  return (
    <div className='flex flex-col mx-10 mt-16 w-full'>
    <div className='flex'>
    <div>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")+"?loop=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    <div className='w-full'>
      <LiveChat/>
    </div>
    </div>
    <CommentContainer />
    <div>
    </div>
    </div>
  );
}

export default WatchPage