import { createGenre, upDataGenre } from '@/api-service/genre-service';
import { IGenre } from '@/types/user.types';
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function AddGenreModal({ open, toggle, itemId2 }: { open: boolean; toggle: () => void; itemId2: IGenre | undefined | string; }) {
    const handleSubmit = async (formData: FormData) => {
        const payload = {
            name: formData.get("name"),
        }
        if (itemId2 !== undefined) {
            await upDataGenre({ ...payload, id: itemId2.id })
        } else {
            await createGenre({ ...payload })
        }
        toggle();
        setTimeout(() => {
            window.location.reload();
        }, 1000)
        
    }
    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h3>Add Genre</h3>
                </ModalHeader>
                <ModalBody>
                    <form action={handleSubmit}>
                        <input type="text" placeholder='Name' name='name' className='form-control my-3' />
                        <button className='btn btn-success'>Save</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

