import React from 'react'
import HeroRightSectionItems from './hero_right_items'

const HeroRightSection = () => {
  return (
    <div className='flex flex-col px-4'>
      <p className='uppercase text-gray-400 text-sm'>This week's</p>
      <p className='font-bold text-2xl mt-4 mb-4'>Leading Conversations</p>
      <HeroRightSectionItems />
    </div>
  )
}

export default HeroRightSection