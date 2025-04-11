import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import SectionEight from './SectionEight'
import SectionNine from './SectionNine'
import SectionTen from './SectionTen'
import SectionEleven from './SectionEleven'
import SectionTwelve from './SectionTwelve'

export default function Home() {
  return (
    <div>
      <SectionOne />
      <hr className='mx-20 mt-20 border-gray-300'/>
      {/* <SectionTwo /> */}
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <hr className='border-gray-300 mt-20 mx-2 md:mx-20 xl:mx-40'/>
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <SectionTwelve/>
    </div>
  )
}
