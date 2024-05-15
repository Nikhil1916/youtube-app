import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOST_POPULAR_API } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  let movies = useSelector(store=>store.search.searchedMovies);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos = async() => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data?.json();
    setVideos(json?.items);
  }
  if(!movies || movies?.length == 0) {
    movies = videos;
  }
  if(!movies) return null;
  return (
    <div className='flex flex-wrap mx-4 my-2 justify-evenly'>
      {
        movies?.map((video)=>{
        return <Link to={`watch?v=${video?.id?.videoId || video?.id}`} key={video?.id}><VideoCard videoInfo={video} key={video?.id || video?.id?.videoId} /></Link>
        })
      }
    </div>
  )
}

export default VideoContainer