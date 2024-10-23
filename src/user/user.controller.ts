import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/registerUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerUser: RegisterUserDto) {
    // console.log('dyk===', registerUser);
    // return 'success';
    return await this.userService.register(registerUser);
  }
}
