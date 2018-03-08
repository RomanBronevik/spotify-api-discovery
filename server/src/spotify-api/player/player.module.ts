import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

@Module({
  imports: [HttpModule],
  exports: [PlayerService],
  components: [PlayerService],
  controllers: [PlayerController]
})
export class PlayerModule {}
