import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props={
    className?:string
    img:string
    title:string
    description:string
    handleClick:()=> void
}

const HomeCard = ({className, img, title, description, handleClick}:Props) => {
  return (
    <div className={cn(`bg-orange-1 w-full xl:max-w-[270px] rounded-[14px] px-4 py-6 min-h-[260px] flex flex-col 
    justify-between cursor-pointer`, className) }
      onClick={handleClick}>
        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
            <Image src={img} alt='icon' width={27} height={27} />
        </div>

        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-sm font-normal'>{description}</p>
        </div>
      </div>
  )
}

export default HomeCard
