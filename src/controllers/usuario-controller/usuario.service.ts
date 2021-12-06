import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.model";
@Injectable()
export class UsuarioService {

    private usuarios = [];
    
    public criar(usuario: Usuario): Usuario{
        this.usuarios.push(usuario);

        return usuario;
    }
}