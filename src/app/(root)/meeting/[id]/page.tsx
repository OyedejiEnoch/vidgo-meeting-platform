"use client"

import Loader from '@/components/Loader'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/clerk-react'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

const Metting = ({params}:{params:{id:string}}) => {

  const {user, isLoaded} =useUser()
  const [isSetUpComplete, setIsSetUpComplete] =useState(false)

  const {call, isCallLoading} =useGetCallById(params.id)

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUpComplete ? (
            <MeetingSetup setIsSetUpComplete={setIsSetUpComplete} />
          ):
            <MeetingRoom />
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Metting
