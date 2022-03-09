import { Module } from '@nestjs/common';
import { ErSpaceService } from './er-space.service';
import { ErSpaceController } from './er-space.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErSpaceRepository } from './er-space.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ErSpaceRepository], 'java')],
  controllers: [ErSpaceController],
  providers: [ErSpaceService],
})
export class ErSpaceModule {}
