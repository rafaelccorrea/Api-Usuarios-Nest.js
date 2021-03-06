import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUserName } from "../validators/usuario.validators";

export class Usuario {
    id: number;

    @IsUserName({
        message:'Nome ja ultilizado!'
    })

    @IsNotEmpty({
        message: 'nome e obrigatorio'
    })
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'Senha obrigatoria'
    }) 
    password: string;


    dataInitial: Date;
}