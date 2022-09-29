import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modal/Modal';
import videoStyle from './video.module.css'
import VideoActions from './VideoActions.jsx';
import { BiArea } from "react-icons/bi";
// const linkVideo = 'https://v16-webapp.tiktok.com/19396adf3819320ef1d3572529f79fb2/63021f21/video/tos/useast2a/tos-useast2a-pve-0068/a015cf81fcaf4d34a952a81e499e68a4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2216&bt=1108&cs=0&ds=3&ft=eXd.6HpDMyq8Z3EvVhe2N946yl7Gb&mime_type=video_mp4&qs=0&rc=ZzVnaWc7OmU1OzczNzQ6OkBpM3A1ZDk6Zmg2OzMzNzczM0AxXjVeMzVgXy0xNWEvXzUzYSM1bGkxcjQwYzBgLS1kMTZzcw%3D%3D&l=2022082106033301021708615904FE9D02&btag=80000';

const Video = ({src}) => {
  const [playing, setPlaying] = useState(true);  
  const video = useRef()
  
  const handlePlay = () => {
    if(playing) video.current.pause()
    else video.current.play()
    
    setPlaying(!playing);
  }
  // useEffect(() => {

  // },[])
  
  console.log(src);
  return (
    <div className={videoStyle.containerVideo}>
        <video 
            className={videoStyle.video} 
            src={src} 
            // controls={true} 
            autoPlay 
            muted
            ref={video}
            onClick={handlePlay}
            loop
        />
        <VideoActions />
        {/* <Modal /> */}
        {/* <button
          className={videoStyle.botonModal}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <BiArea />
        </button> */}
        <BiArea 
          className={videoStyle.botonModal}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        />
        {/* <button onClick={handlePlay}>Play</button> */}
    </div>
  )
}

export default Video;