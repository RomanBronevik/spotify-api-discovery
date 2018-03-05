import { AlbumsModule } from './albums/albums.module';
import { Module } from '@nestjs/common';

/**
 * Wrapper module around Spotify public Web API
 *
 * @export
 * @class SpotifyAPIModule
 */
@Module({
  imports: [AlbumsModule]
})
export class SpotifyAPIModule {}
