// file: src/http-client/models/Constants.ts

/**
 * @name HttpRequestType
 * @description
 * The type of http request we need to execute in our HttpClient request method
 */
export const enum HttpRequestType {
  get,
  post,
  put,
  delete,
  patch,
}

// http content types
export const HttpContentTypes = Object.freeze({
  applicationJson: "application/json",
  formUrlEncoded: "application/x-www-form-urlencoded;charset=UTF-8",
});

// constant for http request methods names
export const HttpRequestMethods = Object.freeze({
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
  patch: "PATCH",
});
