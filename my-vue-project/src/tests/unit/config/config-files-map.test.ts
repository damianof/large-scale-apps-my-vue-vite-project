// file: src/tests/unit/config/config-files-map.test.ts

import { configFilesMap } from "@/config/config-files-map";

describe("configFilesMap", () => {
  it('instance should have "mock" key', () => {
    expect(configFilesMap.has("mock")).toBe(true);
  });

  it('instance should have "jsonserver" key', () => {
    expect(configFilesMap.has("jsonserver")).toBe(true);
  });

  it('instance should have "localapis" key', () => {
    expect(configFilesMap.has("localapis")).toBe(true);
  });

  it('instance should have "beta" key', () => {
    expect(configFilesMap.has("beta")).toBe(true);
  });

  it('instance should have "production" key', () => {
    expect(configFilesMap.has("production")).toBe(true);
  });
});
