
"use client"
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import AddUserModal from '@/app/Modals/UserModal/AddUserModal/page';
import { getUser } from '@/api-service/users-service';
import { IUser } from '@/types/user.types';
import UserCard from './UserCard/UserCars';
export default function User() {
  const [userModal, setUserModal] = useState(false)
  const [userData, setUserData] = useState<IUser[]>([])
  const [userId, setUserId] = useState<string | undefined>("")

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        setUserData(data?.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
    fetchData();
  }, []);

  const ModalUser = () => {
    setUserModal(true)
  }

  const toggle = () => {
    setUserModal(false)
  }


  return (
    <div className='px-[50px] py-[20px]'>
      <AddUserModal open={userModal} toggle={toggle} userId={userId}  />
      <button onClick={ModalUser} className='text-[#fff] bg-blue-700 py-[8px] px-[15px] rounded-[5px]'>Add User</button>
      <div className='flex flex-wrap justify-between gap-[20px] mt-[20px]'>
        {
          userData?.map((item, index) => (
            <div key={index}>
              <UserCard item={item} userId={userId} setUserId={setUserId} setModalEdit={setUserModal}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
