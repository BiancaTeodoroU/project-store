import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../db/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject(DRIZZLE) private db: NodePgDatabase<typeof schema>,
  ) {}

  async findAll() {
    // Aqui o Drizzle busca no seu Postgres da VPS!
    return await this.db.query.restaurants.findMany();
  }
}