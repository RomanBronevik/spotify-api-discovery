import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { AppController } from './app.controller';

import { HttpModule } from './http/http.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
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
export class ApplicationModule {}
