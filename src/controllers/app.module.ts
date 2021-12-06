import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario-controller/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
