import { spotifyApiURL } from './../../constants';
import { HttpService } from './http.service';
import { Component } from '@nestjs/common';
import axios, { AxiosStatic, AxiosRequestConfig, AxiosPromise } from 'axios';
import * as querystring from 'querystring';

/**
 * SpotifyClient
 * Wrapper around HttpService specified for Spotify
 *
 * @export
 * @class SpotifyClient
 */
@Component()
export class SpotifyClient {
  /**
   * Creates an instance of SpotifyClient.
   *
   * @param {HttpService} httpService
   * @memberof SpotifyClient
   */
  constructor(private readonly httpService: HttpService) {}

  /**
   * Perform a GET request on specified Spotify public API endpoint
   *
   * @template T
   * @param {string} endpoint
   * @param {string} accessToken
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<T>}
   * @memberof SpotifyClient
   */
  public get<T>(
    endpoint: string,
    accessToken: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.httpService.get(
      `${spotifyApiURL}${endpoint}`,
      this.mergeConfig(accessToken, config)
    );
  }

  /**
   * Perform a DELETE request on specified Spotify public API endpoint
   *
   * @template T
   * @param {string} endpoint
   * @param {string} accessToken
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<T>}
   * @memberof SpotifyClient
   */
  public delete<T>(
    endpoint: string,
    accessToken: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.httpService.delete(
      `${spotifyApiURL}${endpoint}`,
      this.mergeConfig(accessToken, config)
    );
  }

  /**
   * Perform a HEAD request on specified Spotify public API endpoint
   *
   * @template T
   * @param {string} endpoint
   * @param {string} accessToken
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<T>}
   * @memberof SpotifyClient
   */
  public head<T>(
    endpoint: string,
    accessToken: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.httpService.head(
      `${spotifyApiURL}${endpoint}`,
      this.mergeConfig(accessToken, config)
    );
  }

  /**
   * Perform a POST request on specified Spotify public API endpoint
   *
   * @template T
   * @param {string} endpoint
   * @param {string} accessToken
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<T>}
   * @memberof SpotifyClient
   */
  public post<T>(
    endpoint: string,
    accessToken: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.httpService.post(
      `${spotifyApiURL}${endpoint}`,
      data,
      this.mergeConfig(accessToken, config)
    );
  }

  /**
   * Perform a PUT request on specified Spotify public API endpoint
   *
   * @template T
   * @param {string} endpoint
   * @param {string} accessToken
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<T>}
   * @memberof SpotifyClient
   */
  public put<T>(
    endpoint: string,
    accessToken: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.httpService.put(
      `${spotifyApiURL}${endpoint}`,
      data,
      this.mergeConfig(accessToken, config)
    );
  }

  /**
   * Perform a PATCH request on specified Spotify public API endpoint
   *
   * @template T
   * @param {string} endpoint
   * @param {string} accessToken
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<T>}
   * @memberof SpotifyClient
   */
  public patch<T>(
    endpoint: string,
    accessToken: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.httpService.patch(
      `${spotifyApiURL}${endpoint}`,
      data,
      this.mergeConfig(accessToken, config)
    );
  }

  /**
   * Merge provided AxiosRequestConfig and Authorization header
   *
   * @private
   * @param {string} accessToken
   * @param {AxiosRequestConfig} [config]
   * @memberof SpotifyClient
   */
  private mergeConfig(
    accessToken: string,
    config?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const authorizationHeader = `Bearer ${accessToken}`;

    return config
      ? {
          ...config,
          headers: config.headers
            ? {
                ...config,
                Authorization: authorizationHeader
              }
            : {
                Authorization: authorizationHeader
              }
        }
      : {
          headers: {
            Authorization: authorizationHeader
          }
        };
  }
}
