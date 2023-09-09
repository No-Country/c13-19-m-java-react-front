import { login } from "../services/auth_s";
import { useState } from "react";
import {LoginCredentialsProps, LoginResponseProps} from "../interfaces/auth.interface"
import { useRouter } from "next/navigation";


export function useAuth () {

    const router = useRouter()

    const [user, setUser] = useState< '' | null >()
    const [token, setToken] = useState< string | null >()

    const handleLogin =  async (credentials: LoginCredentialsProps) => {
        try {
            const response = await login(credentials)
            if(response.status) {
                router.push('/pages/carrousel')
            }
        } catch (error) {
            console.log(error)
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