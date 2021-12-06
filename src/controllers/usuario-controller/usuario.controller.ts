import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

    private usuarioService = new UsuarioService();

    @Post()
    public criar(@Body() usuario){
       const userCreate = this.usuarioService.criar(usuario)
        return userCreate;
    }
    
}