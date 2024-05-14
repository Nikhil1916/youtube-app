import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(closeMenu());
    },[]);
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));
  return (
    <div className='flex flex-col mx-10 mt-16'>
    <div>
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
    <CommentContainer/>
    <div>

    </div>
    </div>
  );
}

export default WatchPage