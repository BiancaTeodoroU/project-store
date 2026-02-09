import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    DatabaseModule
  ],
})
export class AppModule {}