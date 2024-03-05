
"use client"
import { PageType } from '@/types/user.types';
import Link from 'next/link';
import React, { useState } from 'react'


export default function Sidebar() {
    const [page, setPage] = useState<PageType[]>([
        { id: 1, component: "/Dashboard", title: "Dashboard" },
        { id: 2, component: "/Dashboard/User", title: "User" },
        { id: 3, component: "/Dashboard/Guides", title: "Guides" },
        { id: 4, component: "/Dashboard/UserGuides", title: "User Guides" },
    ]);
    return (
        <div className=' h-[100vh] w-[250px] bg-slate-700 fixed left-0 top-0'>
            <ul className=' flex items-center justify-center flex-col gap-[50px] h-[100%] w-[100%] p-0'>
                {
                    page.map((item, index) => {
                        return <Link href={item.component} key={index}
                         className=' no-underline text-center border-[1px] rounded-[5px] w-[80%] py-[8px] text-[#fff] hover:bg-blue-700 hover:border-blue-700'>
                            {item.title}</Link>
                    })
                }
            </ul>
        </div>
    )
}
