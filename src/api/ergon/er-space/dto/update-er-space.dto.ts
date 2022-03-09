import { PartialType } from '@nestjs/mapped-types';
import { ErSpaceDTO } from './er-space.dto';

export class UpdateErSpaceDto extends PartialType(ErSpaceDTO) {}
