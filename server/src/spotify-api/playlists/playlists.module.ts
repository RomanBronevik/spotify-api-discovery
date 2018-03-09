import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { PlaylistsController } from './playlists.controller';
import { PlaylistsService } from './playlists.service';

@Module({
  imports: [HttpModule],
  exports: [PlaylistsService],
  components: [PlaylistsService],
  controllers: [PlaylistsController]
})
export class PlaylistsModule {}
