import { $api } from "@/api/interceptors"
import { IUserMe } from "@/types/userMe.types"

export const getUserMe = async () => {
    try{
        const respons = await $api.get("/users/me")
        return respons
    }catch(err) {
        console.log(err)
    }
}
export const upDataUserMe = async (payload: IUserMe) => {
    try{
        const respons = await $api.patch("/users/me", payload)
        return respons
    }catch(err) {
        console.log(err)
    }
}