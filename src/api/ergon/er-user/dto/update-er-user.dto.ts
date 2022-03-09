import { PartialType } from '@nestjs/mapped-types';
import { ErUserDto } from './er-user.dto';

export class UpdateErUserDto extends PartialType(ErUserDto) {}
