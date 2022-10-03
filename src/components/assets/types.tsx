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