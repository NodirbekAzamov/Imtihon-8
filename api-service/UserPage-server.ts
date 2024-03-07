import { $api } from '@/api/interceptors';
export const getUserGuides = async () => {
    try {
        const respons = await $api.get(`/user-guides?page%5Boffset%5D=0&page%5Blimit%5D=10&completed=true&user_id=1`)
        return respons
    } catch (err) {
        console.log(err)
    }
}

export const getEmployee = async () => {
    // const per_page = 6
    try {
        const respons = await $api.get(`/guides?q=q&page%5Boffset%5D=0&page%5Blimit%5D=10&sort%5Bby%5D=id&sort%5Border%5D=asc`)
        return respons;
    } catch (err) {
        console.log(err);
    }
}

// 
export const getUserMe = async () => {
    try {
        const respons = await $api.get("/users/me")
        return respons
    } catch (err) {
        console.log(err);

    }
}

export const postUserPage = async (payload: string) => {
    try {
        const respons = await $api.post(`/user-guides/${payload}/read`)
        return respons
    } catch (err) {
        console.log(err);

    }
}