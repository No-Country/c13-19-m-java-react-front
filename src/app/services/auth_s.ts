import axiosInstance from "../utils/axiosInterface";

export interface UserProps {
    name : string,
    last_name: string
}

export interface LoginResponse {
    user: UserProps,
    token: string
}

export interface LoginCredentials {
    email: string,
    password: string
}

export async function login (credentials: LoginCredentials): Promise<LoginResponse> {
    try {
        const response = await axiosInstance.post('/alumno/login', credentials)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}