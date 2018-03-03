import { Module, MiddlewaresConsumer, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationMiddleware } from './authentication/authentication.middleware';
import { AuthenticationModule } from './authentication/authentication.module';
import { CorsMiddleware } from './http/cors.middleware';
import { HttpModule } from './http/http.module';
import { sessionSecretKey } from './../constants';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UtilsModule } from './utils/utils.module';

/**
 * Application module
 *
 * @export
 * @class ApplicationModule
 */
@Module({
  imports: [AuthenticationModule, UsersModule, HttpModule, UtilsModule],
  controllers: [AppController]
})
export class ApplicationModule implements NestModule {
  /**
   * Implementation of NestModule configure method
   * Sets up expressSession
   *
   * @param {MiddlewaresConsumer} consumer
   * @memberof AuthenticationModule
   */
  public configure(consumer: MiddlewaresConsumer) {
    AuthenticationMiddleware.configure({
      secret: sessionSecretKey,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
    });
    CorsMiddleware.configure({
      origin: 'http://192.168.99.100:3000',
      credentials: true,
      methods: 'all',
      allowedHeaders: 'all'
    });
    consumer
      .apply([AuthenticationMiddleware, CorsMiddleware])
      .forRoutes(AuthenticationController, UsersController);
  }
}
