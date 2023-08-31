import { login, LoginCredentials, LoginResponse } from "../services/auth_s";
import { useState } from "react";
import { useRouter } from "next/navigation"


export function useAuth () {

    const router = useRouter()

    const [user, setUser] = useState< LoginResponse['user'] | null >(null)
    const [token, setToken] = useState< string | null >(null)

    const handleLogin =  async (credentials: LoginCredentials) => {
        try {
            const response = await login(credentials)
            setUser(response.user)
            setToken(response.token)
            router.push('/dashboard')
        } catch (error) {
            console.log('ocurrio un herror: ',error)
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