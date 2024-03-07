
'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent } from 'react'
export default function GuidesSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleChange = (formData: FormData) => {
    const params = new URLSearchParams(searchParams ? searchParams : '')
    const getparams = new URLSearchParams(searchParams ? searchParams : '')
    getparams.get('page')
    let params2:string = formData.get("search") as string
    console.log(params2, "srsss")
    params.set('query', params2)
    replace(`${pathname}?${params}`)
  }

  return (
    <div >
      <form action={handleChange}>
        <input name='search' className='border py-[7px] px-[10px] rounded-[5px]' type="search" placeholder='search...' />
      </form>
    </div>
  )
}
