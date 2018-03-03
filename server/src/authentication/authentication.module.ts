import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod
} from '@nestjs/common';
import { sessionSecretKey } from './../../constants';

import { HttpModule } from '../http/http.module';
import { UsersModule } from '../users/users.module';
import { UtilsModule } from '../utils/utils.module';

import { AuthenticationService } from './authentication.service';
import { AuthenticationMiddleware } from './authentication.middleware';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';

import { AuthenticationController } from './authentication.controller';

/**
 * Authentication module
 * Contains all logic necessary to handle users authentication via Spotify OAuth2 protocol
 *
 * @export
 * @class AuthenticationModule
 */
@Module({
  imports: [UsersModule, HttpModule, UtilsModule],
  components: [AuthenticationService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
