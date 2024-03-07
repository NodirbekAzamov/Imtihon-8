import { createUserGuides } from '@/api-service/user_guides-service'
import { IUserGuidesId } from '@/types/user_guides.types'
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function AddUserGModal({ open, toggle }: { open: boolean, toggle: () => void }) {
  const handleSubmit = async (formData: FormData) => {
    const id = formData.get('id')
    const payload: IUserGuidesId = {
      id
    }
    const respons = await createUserGuides({...payload})
    console.log(respons, "res")
  }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
          <h4>new User Guides</h4>
        </ModalHeader>
        <ModalBody>
          <form action={handleSubmit}>
            <input type="text" placeholder='user id' name='id' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
            <button className='text-[#fff] bg-green-700 py-[8px] px-[15px] rounded-[5px]'>save</button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  )
}
