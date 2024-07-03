"use client"
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/clerk-react'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import { title } from 'process'
import React from 'react'

type Prop ={
  title:string,
  description:string
}

const Table =({title, description}:Prop)=>{
  <div>
    <h1>{title}</h1>
    <h1>{description}</h1>
  </div>
}

const PersonalRoom = () => {
  const {toast} =useToast()
  const router =useRouter()
  const {user}=useUser()
  const meetingId =user?.id
  const meetingLink =`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`
  const {call} =useGetCallById(meetingId!)
  const client= useStreamVideoClient()


  const startRoom =async ()=>{
    if(!client || !user) return 

    const newCall =client.call("default", meetingId!)

    if(!call){
    await newCall.getOrCreate({
      data: {
        starts_at: new Date().toISOString(),
      },
    });
  }

  router.push(`/meeting/${meetingId}?personal=true`)
    
  }
  
  return (
    <section className='size-full flex flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'> Personal Room</h1>

      <div className='flex w-full flex-col gap-8 max-w-[900px]'>
        <div className='flex flex-col items-start gap-2 xl:flex-row'>
          <h1 className='text-base font-medium text-sky-1 lg:text-xl xl:min-w-32'>Topic</h1>
          <h1 className='truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl'>{`${user?.username}'s Meeting Room`}</h1>
        </div>
        <div className='flex flex-col items-start gap-2 xl:flex-row'>
          <h1 className='text-base font-medium text-sky-1 lg:text-xl xl:min-w-32'>Meeting ID</h1>
          <h1 className='truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl'>{meetingId}</h1>
        </div>
        <div className='flex flex-col items-start gap-2 xl:flex-row'>
          <h1 className='text-base font-medium text-sky-1 lg:text-xl xl:min-w-32'>Invite Link</h1>
          <h1 className='truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl'>{meetingLink}</h1>
        </div>
      </div>

      <div >
        <Button className='bg-blue-1 ' onClick={startRoom}>Start Meeting</Button>
        <Button className='bg-dark-1 ' onClick={()=>{
          navigator.clipboard.writeText(meetingLink);
          toast({
            title:"Link Copied"
          })
        }}>Copy Invitation</Button>
      </div>
    </section>
  )
}

export default PersonalRoom