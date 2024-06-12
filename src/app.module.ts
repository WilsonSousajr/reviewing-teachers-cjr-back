import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { TeachersModule } from './teachers/teachers.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, DisciplinesModule, TeachersModule, ReviewsModule, CommentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
