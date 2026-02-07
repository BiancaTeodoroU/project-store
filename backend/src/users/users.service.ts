import * as bcrypt from 'bcrypt';
import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../db/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { eq, or } from 'drizzle-orm';

@Injectable()
export class UserService {
  constructor(
    @Inject(DRIZZLE) private db: NodePgDatabase<typeof schema>,
  ) {}

  async register(name: string, email: string, password: string){
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
    })
    return { message: "Usuário registrado com sucesso!" };
  }
}