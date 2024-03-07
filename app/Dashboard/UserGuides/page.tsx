"use client"
import { getUserGuides } from '@/api-service/user_guides-service'
import AddUserGModal from '@/app/Modals/UserGuidesModal/AddUserGModal.tsx/page'
import { IUserGuides } from '@/types/user_guides.types'
import React, { useEffect, useState } from 'react'

export default function UserGuides() {
  const [userGModal, setUserGmodal] = useState<boolean>(false)
  const [userGuides, setUserGuides] = useState<IUserGuides[]>([])
  const ModalUserGuides = () => {
    setUserGmodal(true)
  }
  const toggle = () => {
    setUserGmodal(false)
  }

  const fetchData = async () => {
    const respons = await getUserGuides()
    setUserGuides(respons?.data?.data)
    console.log(respons);
    
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleInp = async (formData: FormData) => {
    //   let search = formData.get("search")
    //   const respons = await getGuides({...search})
    //   // console.log(respons, "response")
    //   console.log(search, "serach")
  }
  return (
    <div>
      <AddUserGModal open={userGModal} toggle={toggle} />
      <div className=' flex items-center gap-[10px] fixed top-0 right-0 z-20 bg-white w-[80%]  py-[15px] px-[50px]'>
        <button onClick={ModalUserGuides} className='text-[#fff] bg-blue-700 py-[8px] px-[15px] rounded-[5px]'>Add Guides</button>
        <form action={handleInp}>
          <input type="text" placeholder='Search' name='search' className='border py-[8px] px-[10px] rounded-[5px] w-[250px]' />
        </form>
      </div>
      <div className=' mt-[150px]'>
        {
          userGuides?.map((item, index) => {
            return <div key={index}>
              <h1>guide_id{item?.guide_id}</h1>
              <h1>guide_ids{item?.user_ids}</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit animi dolorum veritatis iusto, fugit unde accusamus architecto ex quibusdam iure odit nobis enim at voluptatem doloremque dicta ab ipsam suscipit sequi sed amet! Rerum aut ullam minus cumque beatae quos a! Dignissimos, exercitationem. Pariatur fugit ea aperiam enim, provident magni adipisci harum dignissimos officia! Fugit, praesentium quaerat. Fugit delectus numquam aliquam alias dolores, facere eos consectetur iure nulla commodi quibusdam perspiciatis, officiis ipsa laboriosam ad animi. Ex, tempore unde quasi fugiat ab necessitatibus sint laudantium in libero aut quia consectetur veritatis reprehenderit, natus a repudiandae quas ipsam placeat, possimus qui. Aliquam, animi modi autem aperiam repudiandae explicabo nostrum temporibus tenetur distinctio ducimus repellendus accusantium eaque illum tempora voluptatibus numquam cum ad. Totam!</p>
            </div>
          })
        }
      </div>
    </div>
  )
}
