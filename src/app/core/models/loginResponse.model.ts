export interface loginResponse {

    message: string,
    isAuthenticated: boolean,
    userName: string,
    email: string,
    token: string,
    expiresOn: string
}
