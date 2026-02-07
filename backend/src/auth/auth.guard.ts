import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private JwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.cookies?.['token'];
    if (!token) {
      throw new UnauthorizedException('Acesso negado: Token não encontrado');
    }

    try {
      const payload = await this.JwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      })

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Acesso negado');
    }

    return true;
  }
}