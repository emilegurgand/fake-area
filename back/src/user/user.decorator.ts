import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import jwtDecode from 'jwt-decode';
import { UserAuth } from 'src/auth/auth.controller';
import { UserService } from './user.service';

async function getUser(cookie: { access_token: string }) {
    const jwt = await jwtDecode(cookie.access_token) as { payload: { userId: string, username: string } }
    const usr = new UserAuth({...jwt.payload})
    return usr
}

export const User = createParamDecorator(async (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return getUser(request.cookies)
});