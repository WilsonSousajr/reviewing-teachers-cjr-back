import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.use(
    session({
      secret: 'hNl8_3?jm2p0LePtrf@3x*1"HHnnM>',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, 
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/uploads', express.static('uploads'));

  await app.listen(3333);
}
bootstrap();
