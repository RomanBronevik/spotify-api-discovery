/**
 * SpotifyDeviceAPIResponse
 *
 * @export
 * @interface SpotifyDeviceAPIResponse
 */
export interface SpotifyDeviceAPIResponse {
  /**
   * The device ID. This may be null.
   *
   * @type {string}
   * @memberof SpotifyDeviceAPIResponse
   */
  readonly id: string;

  /**
   * If this device is the currently active device.
   *
   * @type {boolean}
   * @memberof SpotifyDeviceAPIResponse
   */
  readonly is_active: boolean;

  /**
   * Whether controlling this device is restricted. At present if this is
   * “true” then no Web API commands will be accepted by this device.
   *
   * @type {boolean}
   * @memberof SpotifyDeviceAPIResponse
   */
  readonly is_restricted: boolean;

  /**
   * The name of the device.
   *
   * @type {string}
   * @memberof SpotifyDeviceAPIResponse
   */
  readonly name: string;

  /**
   * Device type, such as “Computer”, “Smartphone” or “Speaker”.
   *
   * @type {string}
   * @memberof SpotifyDeviceAPIResponse
   */
  readonly type: string;

  /**
   * The current volume in percent. This may be null.
   *
   * @type {number}
   * @memberof SpotifyDeviceAPIResponse
   */
  readonly volume_percent: number;
}
