"use client"
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setIsSetUpComplete}:{setIsSetUpComplete:(value:boolean)=>void}) => {
    const [isMicCamOn, setIsMicCamOn]=useState(false)

    // we have queryed the call using the useGetCllById hook and then passed it to the StreamCall 
    // so we can now use the useCall hook which allows use to get the call details we queryed
    const call =useCall()
    if(!call){
        throw new Error("usecall must be used within stream call component")
    }
    useEffect(()=>{
        if(isMicCamOn){
            call?.camera.disable();
            call?.microphone.disable();
        }else{
            call?.camera.enable();
            call?.microphone.enable();
        }

    },[isMicCamOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full  flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold ' >SetUp</h1>
      <VideoPreview />
      <div className='mt-6 flex h-16 flex-col items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
            <input type='checkbox' checked={isMicCamOn} onChange={(e)=>setIsMicCamOn(e.target.checked)} />
            join with mic and camera off
        </label>

        <DeviceSettings />

        <Button className='rounded-md bg-green-500 px-4 py-2.5 ' onClick={()=>{call.join();
            setIsSetUpComplete(true)
        }}>
            Join Meeting
        </Button>
      </div>
    </div>
  )
}

export default MeetingSetup
