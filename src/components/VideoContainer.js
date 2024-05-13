import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOST_POPULAR_API } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  useEffect(()=>{
    getVideos();
  },[]);
  const [videos, setVideos] = useState(null);
  const getVideos = async() => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data?.json();
    setVideos(json?.items);
  }
  if(!videos) return null;
  return (
    <div className='flex flex-wrap mx-4 my-2 justify-evenly'>
      {
        videos?.map((video)=>{
        return <Link to={`watch?v=${video?.id}`} key={video?.id}><VideoCard videoInfo={video} key={video?.id} /></Link>
        })
      }
    </div>
  )
}

export default VideoContainer