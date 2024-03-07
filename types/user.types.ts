import { ReactNode } from "react";


export interface IUser {
    first_name: string,
    last_name:  string,
    username: string,
    password: string,
    age: number | string,
    description:  string,
    avatar: string ,
    _id?: string ,
    role:  string,
    image?: string 
}

export interface IUserPayload {
    first_name: string ,
    last_name: string,
    username: string,
    password: string,
    age: number | null,
    description: string,
    avatar: string | undefined,
    _id?: string | undefined,
    role: string,
    image?: string | undefined
}


export interface PageType {
    id: number | string,
    component: string,
    title: string,
    path: string
}


export interface Page {
    q:string;
    page: number
}





