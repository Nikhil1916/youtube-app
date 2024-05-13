import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div id="pageContent" className="mt-16">
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default MainContainer