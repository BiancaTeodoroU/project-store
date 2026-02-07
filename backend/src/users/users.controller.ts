import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ) {
    const { name, email, password, role } = createUserDto;
    return await this.userService.register(name, email, password, role);
  }

  @Post('login')
  async login(@Body() LoginDto: LoginDto) {
    const { email, password } = LoginDto;
    return await this.userService.login(email, password);
  }
}