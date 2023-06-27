export interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    role: "Admin"| "User";
    image?: string;
    isEnabled?: boolean;
    image?: string;
}