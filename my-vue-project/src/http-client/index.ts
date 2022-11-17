// file: src/http-client/index.ts

import { HttpClientInterface } from "./models/HttpClient.interface";
import { config } from "@/config"; // <-- uncomment (or add) this line

import { HttpClientAxios } from "./models/HttpClient.axios";
import { HttpClientFetch } from "./models/HttpClient.fetch";

// export all our interfaces/models/enums
export * from "./models";

let _httpClient: HttpClientInterface | undefined = undefined;

// export out hook
export const useHttpClient = () => {
  if (!_httpClient) {
    // export instance of HttpClientInterface
    const clientType = config.httpClient.clientType;

    // if you'd like to use axios, set "clientType": "axios" within the config files (section "httpClient")
    if (clientType === "fetch") {
      _httpClient = new HttpClientFetch();
    } else if (clientType === "axios") {
      _httpClient = new HttpClientAxios();
    }
  }

  return _httpClient as HttpClientInterface;
};
