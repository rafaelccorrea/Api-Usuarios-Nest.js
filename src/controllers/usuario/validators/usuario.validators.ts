import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "../usuario.service";

@ValidatorConstraint()
class IsUserNameConstraint implements ValidatorConstraintInterface {
    constructor(private usuarioService: UsuarioService){}

    validate(name: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.busca(name);
    }
}
    
export function IsUserName(validationOptions? : ValidationOptions){
    return function(object: Object, propertyName: string){
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUserNameConstraint
        })
    }
}