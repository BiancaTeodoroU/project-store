import { Module } from '@nestjs/common';
import { drizzleProvider } from './db/drizzle.provider';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';

@Module({
  controllers: [RestaurantsController],
  providers: [drizzleProvider, RestaurantsService], // Registre o provider e o service
})
export class AppModule {}