import { Body, Controller, Post } from "@nestjs/common";
import { Usuario } from "./usuario.model";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {
    constructor(
        private usuarioService: UsuarioService
    ){}

    @Post()
    public criar(@Body() usuario: Usuario):Usuario{
       const userCreate = this.usuarioService.criar(usuario)
        return userCreate;
    }
    
}