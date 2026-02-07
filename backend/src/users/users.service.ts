import * as bcrypt from 'bcrypt';
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { DRIZZLE } from '../db/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
  constructor(
    @Inject(DRIZZLE) private db: NodePgDatabase<typeof schema>,
  ) {}

  async login(email: string, passwordLogin: string) {
    const user = await this.db.query.users.findFirst({
      where: (fields) => eq(fields.email, email),
    })

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const isPasswordValid = await bcrypt.compare(passwordLogin, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const { password, ...result } = user;
    return {
      message: "Login bem-sucedido!",
      user: result,
    }
  }

  async register(name: string, email: string, password: string, role: 'ADMIN' | 'CUSTOMER' = 'CUSTOMER') {
    const userExist = await this.db.query.users.findFirst({
      where: (fields, operators) => operators.or(
        eq(fields.email, email),
        eq(fields.name, name)
      )
    });

    if(userExist){
      throw new Error('Usuário já existe');
    }

    const hash = await bcrypt.hash(password, 10);

    await this.db.insert(schema.users).values({
      name,
      email,
      password: hash,
      role,
    })
    return { message: "Usuário registrado com sucesso!" };
  }
}