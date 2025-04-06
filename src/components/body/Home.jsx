import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFive from './SectionFive'

export default function Home() {
  return (
    <div>
      <SectionOne />
      <hr className='mx-20 mt-20 border-gray-300'/>
      <SectionTwo />
      <SectionThree />
      <SectionFive />
    </div>
  )
}
