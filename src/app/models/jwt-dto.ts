import { RolEnum } from "./rol-enum";

export class JwtDto {
    id: number;
    token: string;
    type: string;
    username: string;
    email: string
    rol: string;
}
