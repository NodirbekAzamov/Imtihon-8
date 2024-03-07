"use client"
import { getGuides } from '@/api-service/guides-service'
import { IGuides, IGuides2 } from '@/types/guides.types'
import React, { ChangeEvent, useEffect, useState } from 'react'
import "./Guides.css"
import AddGuidesModal from '@/app/Modals/GuidesModal/AddGuidesModal/page'
import { RiDeleteBin3Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import DeleteGuidesModal from '@/app/Modals/GuidesModal/DeleteGuidesModal.tsx/page'
import GuidesSearch from '../Sidebar/GuidesSearch/page'
import { Page } from '@/types/user.types'
import Pagination from '../Pagination/Pagination'
const edit_obj = {
  title: "",
  content: ""
}

export default function Guides({ searchParams }: { searchParams: { query: string, page: string } }) {
  const [guides, setGuides] = useState<IGuides2[]>([])
  const [guidesModal, setGuidesModal] = useState<boolean>(false)
  const [deleteGuides, setDeleteGuides] = useState<boolean>(false)
  const [guidesId, setGuidesId] = useState<string | undefined>("")
  const [guidesItem, setGuidesItem] = useState<IGuides>(edit_obj)

  const q = searchParams.query || ""
  const page = Number(searchParams.page) || 1

  const fetchData = async () => {
    let payload: Page = { q, page }
    const respons = await getGuides(payload)
    setGuides(respons?.data?.data)
  }
  useEffect(() => {
    fetchData()
  }, [])


  const ModalGuides = () => {
    setGuidesModal(true)
  }
  const DeleteGuides = (id: string | undefined) => {
    setDeleteGuides(true)
    setGuidesId(id)
  }
  const editGuides = async (item: IGuides) => {
    setGuidesModal(true)
    setGuidesItem(item)
  }
  const toggle = () => {
    setGuidesModal(false)
    setDeleteGuides(false)
    setGuidesItem(edit_obj)
  }


  return (
    <div className=' relative'>
      <AddGuidesModal open={guidesModal} toggle={toggle} guidesItem={guidesItem} />
      <DeleteGuidesModal open={deleteGuides} toggle={toggle} guidesId={guidesId} />
      <div className=' flex items-center  justify-between gap-[10px] fixed top-0 right-0 z-20 bg-white w-[80%]  py-[15px] px-[50px]'>
        <div className='flex items-center gap-[10px]'>
          <button onClick={ModalGuides} className='text-[#fff] bg-blue-700 py-[8px] px-[15px] rounded-[5px]'>Add Guides</button>
          <GuidesSearch />
        </div>
        <Pagination count={page} />
      </div>

      <div className='w-[100%] flex flex-wrap justify-between  px-[50px] py-[20px] gap-[20px] mt-[60px]'>
        {
          guides?.map((item, index) => {
            return <div key={index} className='guides__map border-[1px] w-[30%] h-[250px] p-[10px] rounded-[5px] overflow-y-auto '>
              <div className='flex items-center justify-between  mb-[15px]'>
                <span className=' text-end bg-green-600 text-[#fff] p-[5px] rounded-[5px]'>{index + 1} chi Qoida</span>
                <div className='flex items-center gap-[15px]'>
                  <CiEdit onClick={() => editGuides(item)} className='text-[23px] text-blue-700 cursor-pointer' />
                  <RiDeleteBin3Fill onClick={() => DeleteGuides(item?._id)} className='text-[23px] text-[red] cursor-pointer' />
                </div>
              </div>
              <h5 className=' font-serif'>{item?.title}</h5>
              <p className='font-mono'>{item?.content}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}
