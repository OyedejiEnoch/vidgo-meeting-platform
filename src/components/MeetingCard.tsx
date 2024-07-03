import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import AvatarIcon from './AvatarIcon'
import { avatarImages } from '@/constants'
import Link from 'next/link'

type Prop={
    type:string
    mainIcon:string
    title:string
    date:string
    startTime?:string,
    endTime?:string,
    firstButtonText?:string
    secondButtonText?:string
    firstButtonIcon?:string,
    secondButtonIcon:string
    link?:string
    handleClick?:()=> void
}

const MeetingCard = ({type, mainIcon,date, title, firstButtonText, secondButtonText,firstButtonIcon,
    secondButtonIcon, link, handleClick
 }:Prop) => {
  return (
    <div className='flex flex-col justify-between gap-4 w-[450px] h-[258px] rounded-xl px-6 py-8 bg-dark-1'>
        <div className='flex flex-col gap-4'>
            <Image src={mainIcon} alt='icon' width={25} height={25} />

            <h1 className='font-bold text-[20px] leading-4'>{title}</h1>
            <p className='text-[14px] text-gray-300 '>{date}</p>

        </div>

        <div className='flex justify-between items-center'>
            {/* images */}
          { type !== "recordings" && 
          <div className='flex items-center'>
                <AvatarIcon />
                <AvatarIcon />
                <AvatarIcon />
            </div>}


           
            <div className='flex items-center justify-between gap-2'>
                <Button onClick={handleClick} className='w-[79px] flex items-center gap-2 rounded bg-[#0E78F9] px-4 py-2'>
                    {firstButtonIcon &&  <Image src="/icons/copy.svg" alt='icon' width={20} height={20} />}
                {firstButtonText}
                </Button>

                <Button className='w-[177px] px-4 py-2 flex items-center gap-2 bg-dark-2'>
                    <Image src="/icons/copy.svg" alt='icon' width={20} height={20} />
                    {secondButtonText}
                </Button>
            </div>

           {/* {type === "recordings" &&
            <div className='flex items-center justify-between gap-2'>
                <Link href={(link as string)} >
                <Button onClick={handleClick} className='w-[79px] rounded bg-[#0E78F9] px-4 py-2 flex items-center gap-2'>
                    <Image src={(firstButtonIcon as string)} alt='icon' width={20} height={20} />
                    {firstButtonText}
                </Button>
                </Link>


                <Button className='w-[177px] px-4 py-2 flex items-center gap-2 bg-dark-2'>
                    <Image src={secondButtonIcon} alt='icon' width={20} height={20} />
                   {secondButtonText}
                </Button>
            </div>} */}

        </div>
    </div>
  )
}

export default MeetingCard
