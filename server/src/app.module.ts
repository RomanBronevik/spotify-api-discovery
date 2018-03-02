import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { AppController } from './app.controller';

import { HttpModule } from './http/http.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [AuthenticationModule, UsersModule, HttpModule],
  controllers: [AppController]
})
export class ApplicationModule {}
