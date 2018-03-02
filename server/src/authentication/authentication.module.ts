import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod
} from '@nestjs/common';

import { HttpModule } from '../http/http.module';
import { UsersModule } from '../users/users.module';

import { AuthenticationService } from './authentication.service';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';

import { AuthenticationController } from './authentication.controller';

@Module({
  imports: [UsersModule, HttpModule],
  components: [AuthenticationService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
