import { Controller, Query } from '@nestjs/common';

import { SpotifyCursorBasedPaging } from '../types/classes/spotify-cursor-based-paging.class';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifyRepeatState } from './../types/types/spotify-repeat-state.type';
import { SpotifyCurrentlyPlaying } from './classes/spotify-currently-playing.class';
import { SpotifyDevice } from './classes/spotify-device.class';
import { SpotifyPlayHistory } from './classes/spotify-play-history.class';
import { SpotifyPlayingContext } from './classes/spotify-playing-context.class';
import { PlayerService } from './player.service';

/**
 * PlayerController
 *
 * @export
 * @class PlayerController
 */
@Controller()
export class PlayerController {
  /**
   * Creates an instance of PlayerController.
   *
   * @param {PlayerService} playerService
   * @memberof PlayerController
   */
  constructor(private readonly playerService: PlayerService) {}

  /**
   * Get a User's Available Devices
   *
   * @param {string} accessToken
   * @returns {Promise<SpotifyDevice[]>}
   * @memberof PlayerController
   */
  public async getAvailableDevices(
    @AccessToken() accessToken: string
  ): Promise<SpotifyDevice[]> {
    return await this.playerService.getAvailableDevices(accessToken);
  }

  /**
   * Get Information About The User's Current Playback
   *
   * @param {string} accessToken
   * @param {string} [market]
   * @returns {Promise<SpotifyPlayingContext>}
   * @memberof PlayerController
   */
  public async getCurrentPlaybackInformations(
    @AccessToken() accessToken: string,
    @Query('market') market?: string
  ): Promise<SpotifyPlayingContext> {
    return await this.playerService.getCurrentPlaybackInformations(
      accessToken,
      market
    );
  }

  /**
   * Get Current User's Recently Played Tracks
   *
   * @param {string} accessToken
   * @param {number} [limit]
   * @param {number} [after]
   * @param {number} [before]
   * @returns {Promise<SpotifyCursorBasedPaging<SpotifyPlayHistory>>}
   * @memberof PlayerController
   */
  public async getUserRecentlyPlayedTracks(
    @AccessToken() accessToken: string,
    @Query('limit') limit?: number,
    @Query('after') after?: number,
    @Query('before') before?: number
  ): Promise<SpotifyCursorBasedPaging<SpotifyPlayHistory>> {
    return await this.playerService.getUserRecentlyPlayedTracks(
      accessToken,
      limit,
      after,
      before
    );
  }

  /**
   * Get the User's Currently Playing Track
   *
   * @param {string} accessToken
   * @param {string} [market]
   * @returns {Promise<SpotifyCurrentlyPlaying>}
   * @memberof PlayerController
   */
  public async getCurrentlyPlayingTrack(
    @AccessToken() accessToken: string,
    @Query('market') market?: string
  ): Promise<SpotifyCurrentlyPlaying> {
    return await this.playerService.getCurrentlyPlayingTrack(
      accessToken,
      market
    );
  }

  /**
   * Pause a User's Playback
   *
   * @param {string} accessToken
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async pauseCurrentlyPlayingTrack(
    @AccessToken() accessToken: string,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.playerService.pauseCurrentlyPlayingTrack(
      accessToken,
      deviceID
    );
  }

  /**
   * Seek To Position In Currently Playing Track
   *
   * @param {string} accessToken
   * @param {number} positionMs
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async seekToPositionInCurrentlyPlayingTrack(
    @AccessToken() accessToken: string,
    @Query('position_ms') positionMs: number,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.playerService.seekToPositionInCurrentlyPlayingTrack(
      accessToken,
      positionMs,
      deviceID
    );
  }

  /**
   * Set Repeat Mode On User’s Playback
   *
   * @param {string} accessToken
   * @param {SpotifyRepeatState} state
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async setRepeatMode(
    @AccessToken() accessToken: string,
    @Query('state') state: SpotifyRepeatState,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.setRepeatMode(accessToken, state, deviceID);
  }

  /**
   * Set Volume For User's Playback
   *
   * @param {string} accessToken
   * @param {number} volumePercent
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async setVolume(
    @AccessToken() accessToken: string,
    @Query('volume_percent') volumePercent: number,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.setVolume(accessToken, volumePercent, deviceID);
  }

  /**
   * Skip User’s Playback To Next Track
   *
   * @param {string} accessToken
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async nextTrack(
    @AccessToken() accessToken: string,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.nextTrack(accessToken, deviceID);
  }

  /**
   * Skip User’s Playback To Previous Track
   *
   * @param {string} accessToken
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async previousTrack(
    @AccessToken() accessToken: string,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.previousTrack(accessToken, deviceID);
  }

  /**
   * Start/Resume a User's Playback
   *
   * @param {string} accessToken
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async startOrResumeUserPlayback(
    @AccessToken() accessToken: string,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.startOrResumeUserPlayback(accessToken, deviceID);
  }

  /**
   * Toggle Shuffle For User’s Playback
   *
   * @param {string} accessToken
   * @param {boolean} state
   * @param {string} [deviceID]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async toggleShuffle(
    @AccessToken() accessToken: string,
    @Query('state') state: boolean,
    @Query('device_id') deviceID?: string
  ): Promise<void> {
    return await this.toggleShuffle(accessToken, state, deviceID);
  }

  /**
   * Transfer a User's Playback
   *
   * @param {string} accessToken
   * @param {string} [deviceID]
   * @param {boolean} [play]
   * @returns {Promise<void>}
   * @memberof PlayerController
   */
  public async transferPlayback(
    @AccessToken() accessToken: string,
    @Query('device_id') deviceID?: string,
    @Query('play') play?: boolean
  ): Promise<void> {
    return await this.transferPlayback(accessToken, deviceID, play);
  }
}
