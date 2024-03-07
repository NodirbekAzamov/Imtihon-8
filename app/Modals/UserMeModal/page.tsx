import { upDataUserMe } from '@/api-service/userMe-server'
import { $api } from '@/api/interceptors'
import { IUserMe } from '@/types/userMe.types';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import img from "@/assets/cloud-upload.jpg"
export default function UserMeModal({ open, toggle }: { open: boolean; toggle: () => void; }) {
    const [file, setFile] = useState()
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files && e.target.files[0]
        const form = new FormData()
        form.append("file", file as Blob)
        const respons = await $api.post("/upload", form)
        setFile(respons?.data?.path)
    }
    const handleSubmit = async (formData: FormData) => {
        let first_name = "Abdulloh" as string;
        let last_name = "Aburazzoqov" as string;
        let age = Number(23) as number;
        let username = "abdulloh007" as string;
        let description = formData.get("description") as string;
        let payload: IUserMe = {
            first_name,
            last_name,
            age,
            username,
            description,
            avatar: file
        }
        const respons = await upDataUserMe({ ...payload })
        if (respons?.status === 201) {
            window.location.reload()
        }
    }
    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h4>sssrfvs</h4>
                </ModalHeader>
                <ModalBody>
                    <form action={handleSubmit} className='flex gap-[10px]'>
                        <div className='w-[40%] h-[150px] border relative cursor-pointer'>
                            <input type="file" onChange={handleFileChange} className="w-[100%] cursor-crosshair h-[100%] z-10 absolute opacity-0" />
                            {/* <Image src={img} alt='user' fill className="w-[100%]  object-cover h-[100%] absolute z-0 mix-blend-multiply" /> */}
                            <Image src={file ? file : img} alt='user' fill className="w-[100%]  object-cover h-[100%] absolute z-0 mix-blend-multiply" />
                        </div>
                        <div className='w-[60%]'>
                            <input type="text" placeholder='first_name' name='first_name' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <input type="text" placeholder='last_name' name='last_name' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <input type="number" placeholder='age' name='age' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <input type="text" placeholder='username' name='username' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <textarea id="" cols={30} rows={5} placeholder='description' name='description' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]'></textarea>
                            <button className='text-[#fff] bg-green-700 py-[8px] px-[15px] rounded-[5px]'>save</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}
