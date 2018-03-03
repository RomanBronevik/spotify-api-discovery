import { HttpModule } from './../http/http.module';
import { Module } from '@nestjs/common';
import { UsersController } from './Users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';

/**
 * Users module
 *
 * @export
 * @class UsersModule
 */
@Module({
  imports: [DatabaseModule, HttpModule],
  exports: [UsersService],
  controllers: [UsersController],
  components: [UsersService, ...usersProviders]
})
export class UsersModule {}
