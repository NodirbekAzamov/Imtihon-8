"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import img from "@/assets/Najot_Talim-img.jpg"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export interface Page {
    id: number,
    path: string,
    component: string,
    title: string,
}
export default function UserSidebar() {
    const [page, setPage] = useState<Page[]>([
        { id: 1, path: "UserPage", component: "/UserPage", title: "Guides" },
        { id: 2, path: "UserProfile", component: "/UserPage/UserProfile", title: "Profile" }
    ])

    const pathname = usePathname()

    return (
        <div className=' h-[100vh] w-[270px] bg-slate-700 fixed left-0 top-0'>
            <div className='flex items-center justify-center w-[100%] h-[250px]'>
                <Image src={img} alt='logo' className=' w-[80%] h-[80%] rounded-[50%]' />
            </div>
            <ul className=' flex items-center justify-center flex-col gap-[40px] mt-[20px] p-0'>
                {
                    page?.map((item, index) => {
                        return <Link href={item.component} key={index} className={`${pathname === item?.component ? " bg-blue-700 border-blue-700" : ""} no-underline text-center border-[1px] rounded-[5px] w-[80%] py-[8px] text-[#fff] hover:bg-blue-700 hover:border-blue-700`}> {item.title}</Link>
                    })
                }
            </ul>
        </div>
    )
}
