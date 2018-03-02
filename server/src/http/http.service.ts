import { Component } from '@nestjs/common';
import axios, { AxiosStatic, AxiosRequestConfig, AxiosPromise } from 'axios';
import * as querystring from 'querystring';

@Component()
export class HttpService {
  private readonly http: AxiosStatic;

  constructor() {
    this.http = axios;
    axios;
  }

  public get(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.http.get(url, config);
  }

  public delete(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.http.delete(url, config);
  }

  public head(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.http.head(url, config);
  }

  public post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<any> {
    return this.http.post(url, data, config);
  }

  public put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<any> {
    return this.http.put(url, data, config);
  }

  public patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<any> {
    return this.http.patch(url, data, config);
  }
}
