import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [HttpModule],
  exports: [UsersService],
  components: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
