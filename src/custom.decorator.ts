// 把接口鉴权的@SetMetadata封装成自定义装饰器

import { SetMetadata } from '@nestjs/common';
export const RequireLogin = () => SetMetadata('require-login', true);
export const RequirePermission = (...permission: string[]) =>
  SetMetadata('require-permission', permission);
