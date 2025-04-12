import React from 'react'
import video from '/video.mp4'

export default function SectionThree() {
  return (
    <div className='video-bg mt-10 h-[25ch] md:h-[35vh] lg:h-full'>
      <video src={video} autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover"/>
    </div>
  )
}
