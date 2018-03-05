import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';

/**
 * Module for spotify albums
 *
 * @export
 * @class AlbumsModule
 */
@Module({
  imports: [HttpModule],
  exports: [AlbumsService],
  controllers: [AlbumsController],
  components: [AlbumsService]
})
export class AlbumsModule {}
