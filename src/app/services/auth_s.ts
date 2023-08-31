import axiosInstance from "../utils/axiosInterface";
import {LoginCredentialsProps, LoginResponseProps} from '../interfaces/auth.interface'

export async function login (credentials: LoginCredentialsProps) {
    try {
        const response = await axiosInstance.post('/alumno/login', credentials)
        return response
    } catch (error: any) {
        throw new Error ('inicio de secion fallido')
    }
}