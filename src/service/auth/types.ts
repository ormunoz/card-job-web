export interface UserSession {
    data: {
        token: string
        user: {
            id: number,
            email: string,
            roleId: number,
        }
    }
}

export interface UserLocal {
    id: number,
    email: string,
    roleId: number,
}

export interface User {
    id: number,
    email: string,
    roleId: number,
}



export class userLogin {
    constructor(
        public email: string,
    ) { }
}
