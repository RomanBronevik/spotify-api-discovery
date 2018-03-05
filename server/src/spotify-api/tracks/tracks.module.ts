import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';

/**
 * Module for spotify tracks
 *
 * @export
 * @class TracksModule
 */
@Module({
  imports: [HttpModule],
  exports: [TracksService],
  controllers: [TracksController],
  components: [TracksService]
})
export class TracksModule {}
