import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DisciplinesModule } from './disciplines/disciplines.module';

@Module({
  imports: [UsersModule, DisciplinesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
