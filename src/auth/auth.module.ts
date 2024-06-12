import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';
import * as session from 'express-session';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ session: true }), 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, PrismaService, UsersService],
  controllers: [AuthController],
})

export class AuthModule {
  constructor(private readonly authService: AuthService) {
    const passport = require('passport');
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
      const user = await this.authService.findUserById(id);
      done(null, user);
    });
  }
}
