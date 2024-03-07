import { $api } from "@/api/interceptors";
import { IGuides, IGuidesPayload } from "@/types/guides.types";
import { Page } from "@/types/user.types";
// create
export const createGuides = async (data: IGuidesPayload) => {
    try {
        const respons = await $api.post("/guides", data)
        return respons
    } catch (err) {
        console.log(err);
    }
}


// get
export const getGuides = async (data: Page) => {
    const per_page = 6
    try {
        const respons = await $api.get(`/guides?q=${data?.q}&page%5Boffset%5D=${(data?.page - 1) * per_page}&page%5Blimit%5D=${per_page}&sort%5Bby%5D=id&sort%5Border%5D=asc`)
        return respons;
    } catch (err) {
        console.log(err);
    }
}



// delete
export const deleteGuides = async (guidesId: string | undefined) => {
    try {
        const respons = await $api.delete(`/guides/${guidesId}`)
        return respons
    } catch (err) {
        console.log(err);
    }
}

// update 
export const upDataGuides = async (payload: IGuides) => {
    try {
        const respons = await $api.patch(`guides/${payload._id}`, payload)
        return respons
    } catch (err) {
        console.log(err);
    }
}