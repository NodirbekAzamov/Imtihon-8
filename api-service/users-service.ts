'use client'
import { $api } from "@/api/interceptors";
import { IUser, Page } from "@/types/user.types";
import axios from "axios";

// post user
export const createUser = async (data: IUser) => {
    try {
        const respons = await $api.post("/users", data)
        return respons
    } catch (error) {
        console.log(error);
    }
}

// get user
export const getUser = async (data:Page) => {
    const per_page:number = 6
    try {
        const respons = $api.get(`/users?q=${data?.q}&page%5Boffset%5D=${(data?.page - 1) * per_page}&page%5Blimit%5D=${per_page}&sort%5Bby%5D=id&sort%5Border%5D=desc&filters%5Brole%5D=admin`)
        return respons
    } catch (err) {
        console.log(err);
    }
}

// delete user
export const deleteUser = async (id: string | undefined) => {
    try {
        const respons = await $api.delete(`/users/${id}`)
        return respons
    } catch (error) {
        console.log(error);

    }
}

// upData User
export const upDataUser = async (payload: IUser) => {
    try {
        const response = await $api.patch(`/users/${payload._id}`, payload)
        return response
    } catch (error) {
        console.log(error);
    }
}