export interface  UserProps {
    name : string,
    last_name: string
}
export interface LoginResponseProps {
    user: UserProps,
    token: string
}

export interface LoginCredentialsProps {
    mail: string,
    password: string
}