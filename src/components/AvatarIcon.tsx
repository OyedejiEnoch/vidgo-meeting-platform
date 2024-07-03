import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const AvatarIcon = () => {
  return (
    <Avatar className='w-[30px] h-[30px]'>
     <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default AvatarIcon
