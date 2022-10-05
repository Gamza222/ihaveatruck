export interface IForm {
    email: string,
    role_id?: number,
    password?: string,
    passwordRepeat?: string,
    first_name?: string,
    last_name?: string,
    phone_number?: string | null,
    address?: string,
    business_type?: string | number,
}

export interface IResetPwdResponse {
    success: boolean,
    message: string,
    status: number | string,
    data: any,
    debug: string
}

export interface ILoginUser {
    id: number,
    role_id: number,
    email: string,
    first_name: string,
    last_name: string,
    is_active: number,
    created_at: number,
    updated_at: number,
    access_token: string | number
}