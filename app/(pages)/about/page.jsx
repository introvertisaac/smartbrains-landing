"use client"
import InstructorsComponent from '@/app/components/(sub-pages)/Description'
import MissionComponent from '@/app/components/MissionComponent'
import OurVision from '@/app/components/OurVision'
import TeamSection from '@/app/components/TeamSection'
import React from 'react'

const page = () => {
  return (
    <>
    <MissionComponent />
    {/* <InstructorsComponent /> */}
    <OurVision />
    <TeamSection />

    </>
  )
}

export default page