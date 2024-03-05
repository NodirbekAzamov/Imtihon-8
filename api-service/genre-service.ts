import { $api } from "@/api/interceptors";
import { IGenre } from "@/types/user.types";
// create
export const createGenre = async (data: IGenre) => {
    try {
        const respons = await $api.post("/category/create", data)
    }catch(err) {
        console.log(err);
    }
}

// get
export const getGenre = async () => {
    try {
        const respons = await $api.get("/category/get/all")
        return respons?.data;
    }catch(err) {
        console.log(err);
        return [];
    }
}

// delete
export const deleteGenre = async (id:string) => {
    try {
        const respons = await $api.delete(`/category/delete/${id}`)
    }catch(err) {
        console.log(err);
    }
}

// update 
export const upDataGenre = async (payload:IGenre) => {
    try {
        const respons = await $api.patch(`/category/update/${payload.id}`, payload)
    }catch(err) {
        console.log(err);
    }
}