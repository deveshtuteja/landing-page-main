import { GlobeDemo } from '@/components/hero/GlobeDemo'
import Hero from '@/components/hero/Hero'
import SubHero from '@/components/hero/SubHero'
import Secure from '@/components/Secure'
import Closing from '@/components/wrapper/Closing'
import React from 'react'

export default function page() {
  return (
    <div className='pt-24 text-white min-h-screen bg-foreground'>
      <Hero/>
      <SubHero/>
      <GlobeDemo/>
      <Secure/>
      <Closing/>
    </div>
  )
}
