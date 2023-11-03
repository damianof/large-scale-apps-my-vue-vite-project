// file: src/tests/unit/http-client/axios-client/AxiosClient.request.get.test.ts

import axios from "axios";
import {
  HttpClientAxios,
  HttpRequestType,
  HttpRequestParamsInterface,
} from "@/http-client";

let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: "path/to/a/get/api/endpoint",
  requiresToken: false,
};

describe("HttpClient: axios-client: request: get", () => {
  const httpClient = new HttpClientAxios();

  it("should execute get request succesfully", () => {
    vitest.spyOn(axios, "get").mockImplementation(async () =>
      Promise.resolve({
        data: `request completed: ${mockRequestParams.endpoint}`,
      }),
    );

    httpClient
      .request(mockRequestParams)
      .then((response) => {
        //console.debug('response:', response)
        expect(response).toEqual(
          `request completed: ${mockRequestParams.endpoint}`,
        );
      })
      .catch((error) => {
        console.info("AxiosClient.request.get.test.ts: error", error);
      });
  });

  it("get should throw error on rejection", () => {
    vitest.spyOn(axios, "get").mockImplementation(async () =>
      Promise.reject({
        data: `request completed: ${mockRequestParams.endpoint}`,
      }),
    );

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual("Error: HttpClientAxios: exception");
    });
  });
});
