// file: src/tests/unit/http-client/fetch-client/FetchClient.request.get.test.ts

import {
  HttpClientFetch,
  HttpRequestType,
  HttpRequestParamsInterface,
  HttpRequestMethods,
} from "@/http-client";

let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: "path/to/a/get/api/endpoint",
  requiresToken: false,
};

describe("HttpClient: axios-client: request: get", (done) => {
  const httpClient = new HttpClientFetch();

  it("should execute get request succesfully", async () => {
    // could not find an easy way to use spyOn for fetch so overriding global.fetch
    // save original fetch
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    const expectedResult = JSON.stringify({
      result: `request completed: ${mockRequestParams.endpoint}`,
    });

    vitest.spyOn(global, "fetch").mockImplementation(async () =>
      Promise.resolve({
        redirected: false,
        json: () => Promise.resolve(expectedResult),
      } as any),
    );

    try {
      const response = await httpClient.request(mockRequestParams);
      expect(response).not.toBeNull();
      expect(response).toEqual(expectedResult);
    } catch (error) {
      console.info("FetchClient.request.get.test.ts: error", error);
    }

    // restore globa.fetch
    global.fetch = unmockedFetch;
  });

  it("get should throw error on rejection", () => {
    // could not find an easy way to use spyOn for fetch so overriding global.fetch
    // save original fetch
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    vitest
      .spyOn(global, "fetch")
      .mockImplementation(async () => Promise.reject());

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual("Error: HttpClientFetch: exception");
    });

    // restore globa.fetch
    global.fetch = unmockedFetch;
  });
});
