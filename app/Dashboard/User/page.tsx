
"use client"
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import AddUserModal from '@/app/Modals/UserModal/AddUserModal/page';
import { getUser } from '@/api-service/users-service';
import { IUser, Page } from '@/types/user.types';
import UserCard from './UserCard/UserCars';
import GuidesSearch from '../Sidebar/GuidesSearch/page';
import Pagination from '../Pagination/Pagination';
const UserObj = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  age: "",
  description: "",
  avatar: "",
  _id: "",
  role: "",
  image: ""
}
export default function User({ searchParams }: { searchParams: { query: string, page: string } }) {
  const [userModal, setUserModal] = useState(false)
  const [userData, setUserData] = useState<IUser[]>([])
  const [userId, setUserId] = useState<IUser>(UserObj)
  const [file, setFile] = useState<string>("")

  const q = searchParams.query || ""
  const page = Number(searchParams.page) || 1

  const fetchData = async () => {
    let payload: Page = { q, page }
    const respons = await getUser(payload)
    setUserData(respons?.data?.data)
  }
  useEffect(() => {
    fetchData()
  }, [])


  const ModalUser = () => {
    setUserModal(true)
    setUserId(UserObj)
  }

  const toggle = () => {
    setUserModal(false)
  }


  return (
    <div className='px-[50px] py-[20px]'>
      <AddUserModal open={userModal} toggle={toggle} userId={userId} file={file} setFile={setFile} />
      <div className=' flex items-center justify-between gap-[10px] fixed top-0 right-0 z-20 bg-white w-[80%]  py-[15px] px-[50px]'>
        <div className='flex items-center gap-[10px]'>
          <button onClick={ModalUser} className='text-[#fff] bg-blue-700 py-[8px] px-[15px] rounded-[5px]'>Add User</button>
          <GuidesSearch />
        </div>
        <Pagination count={page} />
      </div>
      <div className='flex flex-wrap justify-between gap-[20px] mt-[70px]'>
        {
          userData?.map((item, index) => (
            <div key={index}className='overflow-y-auto'>
              <UserCard item={item} userId={userId} setUserId={setUserId} setModalEdit={setUserModal} setFile={setFile} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
