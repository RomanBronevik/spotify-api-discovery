import { SpotifyDeviceAPIResponse } from './../interfaces/spotify-device-api-response.interface';

/**
 * SpotifyDevice
 *
 * @export
 * @class SpotifyDevice
 */
export class SpotifyDevice {
  /**
   * Creates an instance of SpotifyDevice.
   *
   * @param {SpotifyDevice} device
   * @memberof SpotifyDevice
   */
  constructor(device: SpotifyDevice) {
    Object.keys(device).forEach(key => {
      this[key] = device[key];
    });
  }

  /**
   * Load SpotifyDevice from JSON
   *
   * @static
   * @param {SpotifyDeviceAPIResponse} device
   * @returns
   * @memberof SpotifyDevice
   */
  static fromJSON(device: SpotifyDeviceAPIResponse) {
    return new this({
      id: device.id,
      isActive: device.is_active,
      isRestricted: device.is_restricted,
      name: device.name,
      type: device.type,
      volumePercent: device.volume_percent
    });
  }

  /**
   * The device ID. This may be null.
   *
   * @type {string}
   * @memberof SpotifyDevice
   */
  readonly id: string;

  /**
   * If this device is the currently active device.
   *
   * @type {boolean}
   * @memberof SpotifyDevice
   */
  readonly isActive: boolean;

  /**
   * Whether controlling this device is restricted. At present if this is
   * “true” then no Web API commands will be accepted by this device.
   *
   * @type {boolean}
   * @memberof SpotifyDevice
   */
  readonly isRestricted: boolean;

  /**
   * The name of the device.
   *
   * @type {string}
   * @memberof SpotifyDevice
   */
  readonly name: string;

  /**
   * Device type, such as “Computer”, “Smartphone” or “Speaker”.
   *
   * @type {string}
   * @memberof SpotifyDevice
   */
  readonly type: string;

  /**
   * The current volume in percent. This may be null.
   *
   * @type {number}
   * @memberof SpotifyDevice
   */
  readonly volumePercent: number;
}
