import { SpotifySimplifiedPlaylistAPIResponse } from './../../types/interfaces/spotify-simplified-playlist.interface';
import { SpotifySimplifiedPlaylist } from './../../types/classes/spotify-simplified-playlist.class';
import { SpotifyTrack } from '../../tracks/classes/spotify-track.class';
import { SpotifySimplifiedAlbum } from '../../types/classes/spotify-simplified-album.class';
import { SpotifyArtist } from './../../artists/classes/spotify-artist.class';
import { SpotifyArtistAPIResponse } from './../../artists/interfaces/spotify-artist-api-response.interface';
import { SpotifyTrackAPIResponse } from './../../tracks/interfaces/spotify-track-api-response.interface';
import { SpotifyPaging } from './../../types/classes/spotify-paging.class';
import { SpotifySimplifiedAlbumAPIResponse } from './../../types/interfaces/spotify-simplified-album-api-response.interface';

/**
 * SpotifySearchResult
 *
 * @export
 * @class SpotifySearchResult
 */
export class SpotifySearchResult {
  /**
   * Creates an instance of SpotifySearchResult.
   *
   * @param {SpotifySearchResult} searchResult
   * @memberof SpotifySearchResult
   */
  constructor(searchResult: SpotifySearchResult) {
    this.albums = searchResult.albums;
    this.artists = searchResult.artists;
    this.playlists = searchResult.playlists;
    this.tracks = searchResult.tracks;
  }

  /**
   * Load SpotifySearchResult from JSON
   *
   * @static
   * @param {SpotifySearchResultAPIResponse} searchResult
   * @returns
   * @memberof SpotifySearchResult
   */
  static fromJSON(searchResult: SpotifySearchResultAPIResponse) {
    return new this({
      albums: SpotifyPaging.fromJSON<
        SpotifySimplifiedAlbum,
        SpotifySimplifiedAlbumAPIResponse
      >(
        searchResult.albums,
        searchResult.albums.map(album => SpotifySimplifiedAlbum.fromJSON(album))
      ),
      artists: SpotifyPaging.fromJSON<SpotifyArtist, SpotifyArtistAPIResponse>(
        searchResult.artists,
        searchResult.artists.map(artist => SpotifyArtist.fromJSON(artist))
      ),
      playlists: SpotifyPaging.fromJSON<
        SpotifySimplifiedPlaylist,
        SpotifySimplifiedPlaylistAPIResponse
      >(
        searchResult.playlists,
        searchResult.playlists.map(playlist => SpotifyArtist.fromJSON(playlist))
      ),
      tracks: SpotifyPaging.fromJSON<SpotifyTrack, SpotifyTrackAPIResponse>(
        searchResult.tracks,
        searchResult.tracks.map(track => SpotifyTrack.fromJSON(track))
      )
    });
  }

  /**
   * Albums SpotifyPaging search result. Only available if query was made with
   * type query field containing 'album'
   *
   * @type {SpotifyPaging<SpotifySimplifiedAlbum>}
   * @memberof SpotifySearchResult
   */
  readonly albums?: SpotifyPaging<SpotifySimplifiedAlbum>;

  /**
   * Artists SpotifyPaging search result. Only available if query was made with
   * type query field containing 'artist'
   *
   * @type {SpotifyPaging<SpotifyArtist>}
   * @memberof SpotifySearchResult
   */
  readonly artists?: SpotifyPaging<SpotifyArtist>;

  /**
   * Playlist SpotifyPaging search result. Only available if query was made with
   * type query field containing 'playlist'
   *
   * @type {SpotifyPaging<SpotifySimplifiedPlaylist>}
   * @memberof SpotifySearchResult
   */
  readonly playlists?: SpotifyPaging<SpotifySimplifiedPlaylist>;

  /**
   * Tracks SpotifyPaging search result. Only available if query was made with
   * type query field containing 'track'
   *
   * @type {SpotifyPaging<SpotifyTrack>}
   * @memberof SpotifySearchResult
   */
  readonly tracks?: SpotifyPaging<SpotifyTrack>;
}
