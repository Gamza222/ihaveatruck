export interface IForm {
    email: string,
    password?: string
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