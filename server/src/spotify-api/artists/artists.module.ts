import { Module } from '@nestjs/common';

import { ArtistsController } from './artists.controller';
import { HttpModule } from './../../http/http.module';
import { ArtistsService } from './artists.service';

/**
 * Module for spotify artists
 *
 * @export
 * @class ArtistsModule
 */
@Module({
  imports: [HttpModule],
  exports: [ArtistsService],
  controllers: [ArtistsController],
  components: [ArtistsService]
})
export class ArtistsModule {}
