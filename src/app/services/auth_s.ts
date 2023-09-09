import axiosInstance from "../utils/axiosInterface";
import {LoginCredentialsProps} from '../interfaces/auth.interface'
import { AxiosResponse } from "axios";

export async function login (credentials: LoginCredentialsProps): Promise<any> {
    try {
        const response: AxiosResponse = await axiosInstance.post(`${process.env.NEXT_APP_AUTH_FOR_PAGE}/alumno/login`, credentials)
        return response
    } catch (error: any) {
        throw new Error ('inicio de secion fallido: ', error)
    }
}