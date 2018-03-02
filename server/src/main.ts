import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as passport from 'passport';
import * as expressSession from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(
    expressSession({
      secret: 'my super secret web api key',
      cookie: { secure: false },
      resave: false,
      saveUninitialized: true
    })
  );
  await app.listen(3000);
}
bootstrap();
