import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { HttpModule } from './../../http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  exports: [FollowService],
  components: [FollowService],
  controllers: [FollowController]
})
export class FollowModule {}
