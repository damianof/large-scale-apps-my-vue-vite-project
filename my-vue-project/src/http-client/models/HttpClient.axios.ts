// file: src/http-client/models/HttpClient.axios.ts

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import {
  HttpClientInterface,
  HttpClientConfigInterface,
} from "./HttpClient.interface";
import { HttpRequestType, HttpContentTypes } from "./Constants";
import { UrlUtils } from "./UrlUtils";

/**
 * @name HttpClientAxios
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClientAxios implements HttpClientInterface {
  constructor() {
    // OPTIONAL for now: Add request interceptor to handle errors or other things for each request in one place
  }

  /**
   * @name request
   * @description
   * A method that executes different types of http requests (i.e. GET/POST/etc)
   * based on the parameters argument.
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async.
   */
  async request<R, P>(parameters: HttpRequestParamsInterface<P>): Promise<R> {
    // use destructuring to extract our parameters into local variables
    const {
      requestType,
      endpoint,
      requiresToken,
      payload,
      headers,
      mockDelay,
    } = parameters;

    // use helper to build the fullUrl with request parameters derived from the payload
    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    console.log("HttpClientAxios: fullUrl: ", fullUrl, payload);

    // set axios options
    const options: AxiosRequestConfig = {
      headers: {},
      maxRedirects: 0,
    };

    if (headers) {
      options.headers = {
        //...options.headers,
        ...headers,
      };
    }

    // set headers Authorization
    if (requiresToken && options.headers) {
      options.withCredentials = true;
      // optional: you could add coded here to set the Authorization header with a bearer token
      // options.headers.Authorization = `bearer ${ JwtHelpers.getJwtToken() }`
    }

    let result!: R;

    try {
      switch (requestType) {
        // executes a get request:
        case HttpRequestType.get: {
          const response = await axios.get(fullUrl, options);
          result = response?.data as R;
          break;
        }

        // executes a post request:
        case HttpRequestType.post: {
          const response = await axios.post(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }

        // executes a put request:
        case HttpRequestType.put: {
          const response = await axios.put(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }

        // executes a delete request:
        case HttpRequestType.delete: {
          const response = await axios.delete(fullUrl, options);
          result = response?.data as R;
          break;
        }

        // executes a patch request:
        case HttpRequestType.patch: {
          const response = await axios.patch(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }

        default: {
          console.warn(
            "HttpClientAxios: invalid requestType argument or request type not implemented",
          );
        }
      }
    } catch (e) {
      console.error("HttpClientAxios: exception", e);
      throw Error("HttpClientAxios: exception");
    }

    if ((mockDelay || 0) > 0) {
      return new Promise<R>((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, mockDelay);
      });
    }

    return result;
  }
}
