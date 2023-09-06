import axiosInstance from "../utils/axiosInterface";
import {LoginCredentialsProps, LoginResponseProps} from '../interfaces/auth.interface'
import { AxiosResponse } from "axios";

export async function login (credentials: LoginCredentialsProps): Promise<any> {
    try {
        const response: AxiosResponse = await axiosInstance.post('https://learn-with-me-develop.up.railway.app/Api/v1/alumno/login', credentials)
        return response
    } catch (error: any) {
        throw new Error ('inicio de fdsfds secion fallido')
    }
}