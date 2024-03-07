"use client"
import { getUserMe } from '@/api-service/userMe-server'
import { IUserMe } from '@/types/userMe.types'
import React, { useEffect, useState } from 'react'

export default function Profile() {
    // const [userMe, setUserMe] = useState<IUserMe[]>([])
    // const fetchData = async () => {
    //     const respons = await getUserMe()
    //     setUserMe(respons?.data?.data)
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])
    return (
        <div>
            {/* <div>
                {
                    userMe?.map((item, index) => {
                        return <div key={index}>
                            <h3>{item?.first_name}</h3>
                            <h1>{item?.last_name}</h1>
                        </div>
                    })
                }
            </div> */}
        </div>
    )
}
