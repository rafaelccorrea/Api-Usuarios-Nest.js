import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch()

export class FiltroExcessao implements ExceptionFilter{
    catch(exception: Error, host: ArgumentsHost) {
        const contexto = host.switchToHttp();
        const requisicao = contexto.getRequest();
        const resposta = contexto.getResponse();
    }

}