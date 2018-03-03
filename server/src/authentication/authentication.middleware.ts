import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as passport from 'passport';
import * as expressSession from 'express-session';

import { RequestHandler } from 'express';

/**
 * Authentication Middleware
 * Handle expressSession
 *
 * @export
 * @class AuthenticationMiddleware
 * @implements {NestMiddleware}
 */
@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
  /**
   * Implementation of NestMiddleware configure method.
   * Sets the options for expressSession
   *
   * @static
   * @param {expressSession.SessionOptions} opts
   * @memberof AuthenticationMiddleware
   */
  public static configure(opts: expressSession.SessionOptions) {
    this.options = opts;
  }

  private static options: expressSession.SessionOptions;

  /**
   * Implementation of NestMiddleware resolve method.
   * Sets the expressSession
   *
   * @param {string} name
   * @returns {ExpressMiddleware}
   * @memberof AuthenticationMiddleware
   */
  public resolve(name: string): ExpressMiddleware {
    return (req, res, next) => {
      if (AuthenticationMiddleware.options) {
        expressSession(AuthenticationMiddleware.options);
      } else {
        expressSession();
      }

      next();
    };
  }
}
