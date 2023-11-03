// file: src/tests/unit/http-client/UrlUtils.getFullUrlWithParams.test.ts

import { UrlUtils } from "@/http-client";

describe("UrlUtils: getFullUrlWithParams", () => {
  it("should return fullUrl formatted as expected with one param", () => {
    const endpoint = "https://unit-test-api/v1/domain/[catalogId]/[partId]";
    const params = {
      catalogId: 5346782,
      partId: "abcde23",
    };
    const result = UrlUtils.getFullUrlWithParams(endpoint, params);

    expect("https://unit-test-api/v1/domain/5346782/abcde23").toEqual(result);
  });

  // test our component click event
  it("should return fullUrl formatted as expected with multiple params", () => {
    const endpoint =
      "https://unit-test-api/v1/domain/[country]/[state]/[cityId]";
    const params = {
      country: "USA",
      state: "NY",
      cityId: "gtref345ytr",
    };
    const result = UrlUtils.getFullUrlWithParams(endpoint, params);

    expect("https://unit-test-api/v1/domain/USA/NY/gtref345ytr").toEqual(
      result,
    );
  });
});
