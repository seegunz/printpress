import React from 'react'
import video from '/video.mp4'

export default function SectionThree() {
  return (
    <div className='flex justify-center mt-10 video-bg w-[100%] h-[35vh]'>
      <video src={video} autoPlay loop muted/>
    </div>
  )
}
