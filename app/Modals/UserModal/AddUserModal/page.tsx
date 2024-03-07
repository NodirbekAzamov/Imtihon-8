"use client"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import img from "@/assets/cloud-upload.jpg"
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image';
import { createUser, upDataUser } from '@/api-service/users-service';
import { IUser } from '@/types/user.types';
import { $api } from '@/api/interceptors';

export default function AddUserModal({ open, toggle, userId, file, setFile }: { open: boolean; toggle: () => void; userId: IUser; file: string; setFile: Dispatch<SetStateAction<string>> }) {
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files && e.target.files[0]
        const form = new FormData()
        form.append("file", file as Blob)
        const respons = await $api.post("/upload", form)
        setFile(respons?.data?.path)
    }

    const handleSubmit = async (formData: FormData) => {
        let first_name = formData.get("first_name") as string ? formData.get("first_name") as string : userId?.first_name;
        let last_name = formData.get("last_name") as string ? formData.get("last_name") as string : userId?.last_name;
        let age = Number(formData.get("age")) as number ? Number(formData.get("age")) as number : userId?.age;
        let role = formData.get("role") as string ? formData.get("role") as string : userId?.role;
        let username = formData.get("username") as string ? formData.get("username") as string : userId?.username;
        let password = formData.get("password") as string ? formData.get("password") as string : userId?.password;
        let description = formData.get("description") as string ? formData.get("description") as string : userId?.description;

        let payload: IUser = {
            first_name,
            last_name,
            age,
            role,
            username,
            password,
            description,
            avatar: file ? file : userId?.avatar
        }

        if (userId?.first_name !== "") {
            const response = await upDataUser({ ...payload, _id: userId?._id })
            if (response?.status === 200) {
                window.location.reload();
            } else {
                console.log("error");
            }
        } else {
            const respons = await createUser({ ...payload })
            if (respons?.status === 201) {
                window.location.reload();
            } else {
                console.log("error");
            }
        }
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h3>Add User</h3>
                </ModalHeader>
                <ModalBody>
                    <form action={handleSubmit} className='flex gap-[5px]'>
                        <div className='w-[40%] h-[150px] border relative cursor-pointer'>
                            <input type="file" onChange={handleFileChange} className="w-[100%] cursor-crosshair h-[100%] z-10 absolute opacity-0" />
                            {/* <Image src={img} alt='user' fill className="w-[100%]  object-cover h-[100%] absolute z-0 mix-blend-multiply" /> */}
                            <Image src={file ? `http://localhost:8080/${file}` :  img} alt='user' fill className="w-[100%]  object-cover h-[100%] absolute z-0 mix-blend-multiply" />
                        </div>
                        <div className='w-[60%]'>
                            <input type="text" placeholder='first name' name='first_name' defaultValue={userId?.first_name} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <input type="text" placeholder='last_name' name='last_name' defaultValue={userId?.last_name} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <input type="number" placeholder='age' name='age' defaultValue={userId?.age} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <select name="role" id="" defaultValue={userId?.role} className='w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' >
                                <option value="" hidden>Role</option>
                                <option value="employee" >Employee</option>
                                <option value="admin" >Admin</option>
                            </select>
                            <input type="text" placeholder='username' defaultValue={userId?.username} name='username' className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <input type="password" placeholder='password' name='password' defaultValue={userId?.password} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <textarea name="description" id="" cols={30} rows={5} defaultValue={userId?.description} placeholder='Description' className='w-[100%] resize-none py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' ></textarea>
                            <button className='text-[#fff] bg-green-700 py-[8px] px-[15px] rounded-[5px]'>save</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}


