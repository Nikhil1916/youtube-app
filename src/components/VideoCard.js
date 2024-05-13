import React from 'react'

const VideoCard = ({videoInfo}) => {
  const {snippet , statistics} = videoInfo;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-60 rounded-lg bg-gray-100 shadow-xl cursor-pointer min-h-[250px]'>
        <img src={thumbnails?.medium?.url} />
        <ul>
            <li className='font-bold'>{title?.length > 20    ? title?.substring(0,20)+"..." : title}</li>
            <li>{channelTitle?.length > 20   ? channelTitle?.substring(0,20)+"...": channelTitle}</li>
            <li>{Math.trunc(statistics.viewCount/1000)+"K VIEWS"}</li>
        </ul>
    </div>
  )
}

export default VideoCard