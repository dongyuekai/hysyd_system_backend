import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission } from './custom.decorator';
import { UserInfo } from './user.custom.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  // @SetMetadata('require-login', true)
  // @SetMetadata('require-permission', ['ddd'])
  @RequireLogin()
  @RequirePermission('ddd')
  aaaa(@UserInfo('username') username: string, @UserInfo() userInfo) {
    console.log('username---', username);
    console.log('userInfo---', userInfo);
    return 'aaaa';
  }

  @Get('bbb')
  bbbb() {
    return 'bbbb';
  }
}
