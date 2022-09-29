import React from 'react';
import { BiShare, BiHomeAlt, BiHeart  } from "react-icons/bi";
import style from './video.module.css'


const VideoActions = () => {
  return (
    <aside className={style.actions}>
        <BiHomeAlt className={style.iconHome} />
        <BiHeart className={style.iconHeart}/>
        <BiShare className={style.iconShare}/>
    </aside>
  )
}

export default VideoActions