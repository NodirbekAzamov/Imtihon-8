import { toast } from "react-toastify";

export const Notification =(value: any)=> {
    return toast(value.text, {
        type: value.type
    })
}

