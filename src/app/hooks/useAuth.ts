import { login } from "../services/auth_s";
import { useState } from "react";
import { useRouter } from "next/navigation"
import {LoginCredentialsProps, LoginResponseProps} from "../interfaces/auth.interface"


export function useAuth () {

    const router = useRouter()
    const [user, setUser] = useState< '' | null >()
    const [token, setToken] = useState< string | null >()

    const handleLogin =  async (credentials: LoginCredentialsProps) => {
        try {
            const response = await login(credentials)
            // setUser(response.user)
            // setToken(response.token)
            return response
        } catch (error: any) {
            console.log('ocurrio un herror: ', error)
        }
    }

    const handleLogout = () => {
        setToken(null)
        setUser(null)
    }

    return {
        user,
        token,
        login: handleLogin,
        logout: handleLogout
    }
}