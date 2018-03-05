import { createRouteParamDecorator } from '@nestjs/common';

/**
 * Custom decorator to get access token from client request's authorization header
 */
export const AccessToken = createRouteParamDecorator((data, req) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) return null;
  const [bearer, accessToken] = authorizationHeader.split(' ');

  return accessToken;
});
