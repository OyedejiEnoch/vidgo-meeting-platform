"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname= usePathname()

  return (
    <section className='sticky left-0 flex top-0 h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28
    max-sm:hidden lg:w-[250px]'>
    <div className='flex flex-col flex-1 gap-6'>
        {sidebarLinks.map((link)=>{
            const isActive = pathname === link.route 
            return(
                <Link key={link.label} href={link.route}  className={cn("flex gap-4 items-center p-4 rounded-lg justify-start text-white hover:bg-gray-700 transition duration-150" , {"bg-blue-1":isActive})}
                >
                    <Image src={link.imgUrl} alt='icon' width={24} height={24} />
                   <p className='text-lg font-semibold max-lg:hidden'> {link.label} </p>
                </Link>
            )
        })}
    </div>
    </section>
  )
}

export default Sidebar
