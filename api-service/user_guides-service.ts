import { $api } from "@/api/interceptors";
import { IUserGuidesId } from "@/types/user_guides.types";

// get user guides
export const getUserGuides = async () => {
    try {
        const respons = await $api.get(`/user-guides?page%5Boffset%5D=1&page%5Blimit%5D=10&completed=true&user_id=1`)
        return respons
    }catch(error){
        console.log(error);
    }
}

// post user guides
export const createUserGuides = async (id: IUserGuidesId) => {
    try {
        const respons = await $api.post(`/user-guides/${id}/read`)
        return respons
    }catch(error){
        console.log(error);
    }
}

// delete author
// export const deleteAuthor = async (id:number | undefined) => {
//     try {
//         const respons = await $api.delete(`/author/${id}`)
//     }catch(error){
//         console.log(error);
//     }
// }


// update author
// export const updateAuthor = async (payload:any) => {
//     try {
//         const response = await $api.patch(`/author/${payload.id}`, payload)
//     }catch(error){
//         console.log(error);
        
//     }
// }
