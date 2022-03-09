import { Module } from '@nestjs/common';
import { ErUserService } from './er-user.service';
import { ErUserController } from './er-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErUserRepository } from './er-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ErUserRepository], 'java')],
  controllers: [ErUserController],
  providers: [ErUserService],
  exports: [],
})
export class ErUserModule {}
