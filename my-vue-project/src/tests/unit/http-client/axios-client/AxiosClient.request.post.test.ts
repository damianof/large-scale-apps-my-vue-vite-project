// file: src/tests/unit/http-client/axios-client/AxiosClient.request.post.test.ts

import axios from "axios";
import {
  HttpClientAxios,
  HttpRequestType,
  HttpRequestParamsInterface,
} from "@/http-client";

let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.post,
  endpoint: "path/to/a/post/api/endpoint",
  requiresToken: false,
  payload: {},
};

type P = typeof mockRequestParams.payload;

describe("HttpClient: axios-client: request: post", () => {
  const httpClient = new HttpClientAxios();

  it("should execute post request succesfully", () => {
    vitest.spyOn(axios, "post").mockImplementation(async () =>
      Promise.resolve({
        data: `request completed: ${mockRequestParams.endpoint}`,
      }),
    );

    httpClient
      .request<string, P>(mockRequestParams)
      .then((response) => {
        //console.debug('response:', response)
        expect(response).toEqual(
          `request completed: ${mockRequestParams.endpoint}`,
        );
      })
      .catch((error) => {
        console.info("AxiosClient.request.post.test.ts: post error", error);
      });
  });
});
