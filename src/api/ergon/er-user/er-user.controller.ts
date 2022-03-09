import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ErUserService } from './er-user.service';
import { ErUserDto } from './dto/er-user.dto';
import { UpdateErUserDto } from './dto/update-er-user.dto';
import { SignInUserDTO } from './dto/SignInUser.dto';
import { ErUser } from './entities/er-user.entity';

@Controller('er-user')
export class ErUserController {
  private logger = new Logger('ErUserController');
  constructor(private erUserService: ErUserService) {}

  @Post('/signup')
  signUp(@Body() createErUserDto: ErUserDto): Promise<ErUser> {
    this.logger.verbose('Registering!'); // logging status
    return this.erUserService.signUp(createErUserDto);
  }
  @Post('/signin')
  signIn(@Body() signInUserDTO: SignInUserDTO): Promise<SignInUserDTO> {
    this.logger.verbose('Logging!'); // logging status
    const res = this.erUserService.signIn(signInUserDTO);
    if (res === null) {
      throw new BadRequestException('Invalid user');
    }
    return res;
  }

  @Get()
  findAll() {
    return this.erUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.erUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateErUserDto: UpdateErUserDto) {
    return this.erUserService.update(+id, updateErUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.erUserService.remove(+id);
  }
}
