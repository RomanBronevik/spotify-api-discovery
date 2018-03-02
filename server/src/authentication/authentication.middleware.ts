import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as passport from 'passport';
import * as expressSession from 'express-session';

import { RequestHandler } from 'express';

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
  // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
  public static configure(opts: expressSession.SessionOptions) {
    this.options = opts;
  }

  private static options: expressSession.SessionOptions;

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
