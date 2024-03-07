
"use client"
import { PageType } from '@/types/user.types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import img from "@/assets/Najot_Talim-img.jpg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const [page, setPage] = useState<PageType[]>([
        { id: 1, path: "Profile", component: "/dashboard", title: "Profile" },
        { id: 2, path: "User", component: "/dashboard/User", title: "User" },
        { id: 3, path: "Guides", component: "/dashboard/Guides", title: "Guides" },
        { id: 4, path: "UserGuides", component: "/dashboard/UserBulk", title: "User Guides" },
        { id: 5, path: "UserGuides", component: "/Dashboard/UserGuidesBulk", title: "Natification " },
    ]);
    const pathname = usePathname()


    return (
        <div className=' h-[100vh] w-[270px] bg-slate-700 fixed left-0 top-0'>
            <div className='flex items-center justify-center w-[100%] h-[200px]'>
                <Image src={img} alt='logo' className=' w-[70%] h-[90%] rounded-[50%]' />
            </div>
            <ul className=' flex items-center justify-center flex-col gap-[40px] mt-[20px] p-0'>
                {
                    page.map((item, index) => {
                        return <Link href={item.component} key={index} className={`${pathname === item?.component ? " bg-blue-700 border-blue-700" : ""} no-underline text-center border-[1px] rounded-[5px] w-[80%] py-[8px] text-[#fff] hover:bg-blue-700 hover:border-blue-700`}> {item.title}</Link>
                    })
                }
            </ul>
        </div>
    )
}
