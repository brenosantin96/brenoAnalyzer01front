export type User = {
    id: number,
    name: string,
    email: string;
    password: string;
    isAdmin: boolean;
    profilePic?: string;
}

export type UserLogged = {
    id: number, 
    email: string
    error?: string;
}