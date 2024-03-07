import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import img from "@/assets/deleteImg.gif"
import Image from 'next/image'
import { deleteGuides } from '@/api-service/guides-service';
export default function DeleteGuidesModal({ open, toggle, guidesId }: { open: boolean; toggle: () => void; guidesId: string | undefined }) {
    const removeGuides = async () => {
        const respons = await deleteGuides(guidesId)
        if (respons?.status === 200) {
            window.location.reload();
        } else {
            console.log("error");
        }
    }
    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h4>Delete Guides</h4>
                </ModalHeader>
                <ModalBody className='flex items-center justify-center'>
                    <Image src={img} alt='img' className='w-[350px] h-[300px]' />
                </ModalBody>
                <ModalFooter>
                    <button onClick={removeGuides} className=' bg-red-700 py-[5px] px-[15px] rounded-[5px] text-[#fff]'>Yes</button>
                    <button onClick={toggle} className=' bg-green-600 py-[5px] px-[15px] rounded-[5px] text-[#fff]'>No</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
