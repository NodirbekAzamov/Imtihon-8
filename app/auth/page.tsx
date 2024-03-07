"use client"
import { postAuth } from '@/api-service/auth-server'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Notification } from '../Notification/Notification'
interface formData {
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

const Auth = () => {
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username")
    const password = formData.get("password")
    const payload: formData = { username, password }

    const response = await postAuth({ ...payload })
    if (response?.data?.token) {
      if (response?.data?.role === "employee") {
        Notification({ text: localStorage.getItem("success"), type: "success" });
        setTimeout(() => {
          router.push("/UserPage")
        }, 1500);
      } else if (response?.data?.role === "admin") {
        Notification({ text: localStorage.getItem("success"), type: "success" });
        setTimeout(() => {
          router.push("/dashboard")
        }, 1500)
      }
    }
  }
  return (

    <div className="flex justify-center items-center h-[100vh] bg-gray-900 text-white ">
      <div className="w-[400px] h-[420px]  p-3 shadow shadow-white rounded-lg flex flex-col bg-gray-800 justify-around">
        <h1 className="text-[30px] text-center ">Sign Up</h1>
        <form id="form" action={handleSubmit} className="flex flex-col gap-3">
          <input className="px-3 py-2 w-full placeholder:text-white bg-gray-800 border-b outline-none" name='username' placeholder="User Name" type="text" />
          <input className="px-3 py-2 w-full placeholder:text-white bg-gray-800 border-b outline-none" name='password' placeholder="Password" type="password" />
        </form>
        <button className="px-4 py-2 rounded-md bg-green-500" form="form">Sign Up</button>
      </div>
    </div>
  )
}

export default Auth
