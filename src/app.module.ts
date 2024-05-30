import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [UsersModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
