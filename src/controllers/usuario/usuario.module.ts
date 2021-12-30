import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { IsUserNameConstraint } from "./validators/usuario.validators";

@Module({
    controllers: [UsuarioController],
    providers: [
        UsuarioService,
        IsUserNameConstraint
    ],
})
export class UsuarioModule {

}