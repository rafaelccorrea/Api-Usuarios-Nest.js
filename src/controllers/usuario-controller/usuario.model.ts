import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
    id: number;

    @IsNotEmpty({
        message: 'nome e obrigatorio'
    })
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty({
        message: 'Senha obrigatoria'
    })
    password: string;
    dataInitial: Date;
}