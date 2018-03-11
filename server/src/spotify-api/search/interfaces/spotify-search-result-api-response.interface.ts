import { SpotifyTrackAPIResponse } from './../../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifySimplifiedPlaylistAPIResponse } from './../../types/interfaces/spotify-simplified-playlist.interface';
import { SpotifyArtistAPIResponse } from './../../artists/interfaces/spotify-artist-api-response.interface';
import { SpotifySimplifiedAlbumAPIResponse } from './../../types/interfaces/spotify-simplified-album-api-response.interface';
import { SpotifyPagingAPIResponse } from './../../types/interfaces/spotify-paging-api-response.interface';
/**
 * SpotifySearchResultAPIResponse
 *
 * @export
 * @class SpotifySearchResultAPIResponse
 */
export class SpotifySearchResultAPIResponse {
  /**
   * Albums SpotifyPagingAPIResponse search result. Only available if query was made with
   * type query field containing 'album'
   *
   * @type {SpotifyPagingAPIResponse<SpotifySimplifiedAlbumAPIResponse>}
   * @memberof SpotifySearchResultAPIResponse
   */
  readonly albums?: SpotifyPagingAPIResponse<SpotifySimplifiedAlbumAPIResponse>;

  /**
   * Artists SpotifyPagingAPIResponse search result. Only available if query was made with
   * type query field containing 'artist'
   *
   * @type {SpotifyPagingAPIResponse<SpotifyArtistAPIResponse>}
   * @memberof SpotifySearchResultAPIResponse
   */
  readonly artists?: SpotifyPagingAPIResponse<SpotifyArtistAPIResponse>;

  /**
   * Playlist SpotifyPagingAPIResponse search result. Only available if query was made with
   * type query field containing 'playlist'
   *
   * @type {SpotifyPagingAPIResponse<SpotifySimplifiedPlaylistAPIResponse>}
   * @memberof SpotifySearchResultAPIResponse
   */
  readonly playlists?: SpotifyPagingAPIResponse<
    SpotifySimplifiedPlaylistAPIResponse
  >;

  /**
   * Tracks SpotifyPagingAPIResponse search result. Only available if query was made with
   * type query field containing 'track'
   *
   * @type {SpotifyPagingAPIResponse<SpotifyTrackAPIResponse>}
   * @memberof SpotifySearchResultAPIResponse
   */
  readonly tracks?: SpotifyPagingAPIResponse<SpotifyTrackAPIResponse>;
}
