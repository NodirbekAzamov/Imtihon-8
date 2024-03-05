"use client"
import { postAuth } from '@/api-service/auth-server'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
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
        console.log(response?.data?.role, "caca");
      } else if (response?.data?.role === "admin") {
        router.push("/Dashboard")
      }
    }
  }
  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" placeholder='username' name='username' className='border-[2px]' />
        <input type="password" placeholder='password' name='password' className='border-[2px]' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Auth