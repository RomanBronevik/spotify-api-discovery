import { SpotifyClient } from './spotify.client';
import { HttpService } from './http.service';
import { Module } from '@nestjs/common';

/**
 * HttpModule
 * Contains utility services to make http requests
 *
 * @export
 * @class HttpModule
 */
@Module({
  exports: [HttpService, SpotifyClient],
  components: [HttpService, SpotifyClient]
})
export class HttpModule {}
