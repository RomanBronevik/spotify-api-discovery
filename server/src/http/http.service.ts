import { Component } from '@nestjs/common';
import axios, { AxiosStatic, AxiosRequestConfig, AxiosPromise } from 'axios';
import * as querystring from 'querystring';

/**
 * Http service
 * A wrapper around axios library
 *
 * @export
 * @class HttpService
 */
@Component()
export class HttpService {
  private readonly http: AxiosStatic;

  /**
   * Creates an instance of HttpService.
   *
   * @memberof HttpService
   */
  constructor() {
    this.http = axios;
    axios;
  }

  /**
   * Perform a GET request on specified URL
   *
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<any>}
   * @memberof HttpService
   */
  public get(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.http.get(url, config);
  }

  /**
   * Perform a DELETE request on specified URL
   *
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<any>}
   * @memberof HttpService
   */
  public delete(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.http.delete(url, config);
  }

  /**
   * Perform a HEAD request on specified URL
   *
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<any>}
   * @memberof HttpService
   */
  public head(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.http.head(url, config);
  }

  /**
   * Perform a POST request on specified URL
   *
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<any>}
   * @memberof HttpService
   */
  public post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<any> {
    return this.http.post(url, data, config);
  }

  /**
   * Perform a PUT request on specified URL
   *
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<any>}
   * @memberof HttpService
   */
  public put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<any> {
    return this.http.put(url, data, config);
  }

  /**
   * Perform a PATCH request on specified URL
   *
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise<any>}
   * @memberof HttpService
   */
  public patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<any> {
    return this.http.patch(url, data, config);
  }
}
