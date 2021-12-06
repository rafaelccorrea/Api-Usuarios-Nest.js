import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.model";
@Injectable()
export class UsuarioService {
    
    private usuarios: Array<Usuario> = [{
        id: 1,
        name: 'Rafa',
        email: 'rafael@gmail.com',
        password: '123',
        dataInitial: new Date()
    }];

    public busca(name: string): Usuario {
        return this.usuarios.find(usuario => usuario.name == name)
    }
    
    public criar(usuario: Usuario): Usuario{
        this.usuarios.push(usuario);

        return usuario;
    }
}