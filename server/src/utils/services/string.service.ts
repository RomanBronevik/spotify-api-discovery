import { Component } from '@nestjs/common';

/**
 * String utility servi e
 *
 * @export
 * @class StringService
 */
@Component()
export class StringService {
  /**
   * Generates a random string of {length} length
   *
   * @param {number} length
   * @returns {string}
   * @memberof StringService
   */
  public generateRandomString(length: number): string {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
