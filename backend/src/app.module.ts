import { Module } from '@nestjs/common';
import { drizzleProvider } from './db/drizzle.provider';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';

@Module({
  controllers: [RestaurantsController, UserController],
  providers: [drizzleProvider, RestaurantsService, UserService],
})
export class AppModule {}