import { createGuides, upDataGuides } from '@/api-service/guides-service';
import { IGuides, IGuides2, IGuidesPayload } from '@/types/guides.types';
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export default function AddGuidesModal({ open, toggle, guidesItem }: { open: boolean; toggle: () => void; guidesItem:  IGuides ; }) {
    const handleSubmit = async (formData: FormData) => {
        let title = formData.get('title') as string;
        let content = formData.get('content') as string;
        let payload: IGuidesPayload = {
            title,
            content,
            notify: true
        }
        if (guidesItem?.title !== "") {
            const respons = await upDataGuides({ ...payload, _id: guidesItem?._id })
            if (respons?.status === 200) {
                window.location.reload()
            } else {
                console.log("error");
            }
        } else {
            const respons = await createGuides({ ...payload })
            if (respons?.status === 201) {
                window.location.reload()
            } else {
                console.log("error");
            }
        }
    }
    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h3>New Guides</h3>
                </ModalHeader>
                <ModalBody>
                    <form action={handleSubmit}>
                        <input type="text" placeholder='title' name='title' defaultValue={guidesItem?.title} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                        <input type="text" placeholder='content' name='content' defaultValue={guidesItem?.content} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                        <button className='text-[#fff] bg-green-700 py-[8px] px-[15px] rounded-[5px]'>save</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}
