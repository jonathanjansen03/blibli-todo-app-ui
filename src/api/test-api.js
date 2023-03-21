import httpApi from "@/utils/http-api";
import { testApi } from "@/config";

export default {
  getDataByAPI: (query) => {
    return httpApi.getDataViaApi({
      url: testApi.testGetAPI.api,
      queryParams: query,
    });
  },
  postDataViaAPI: (body) => {
    return httpApi.postDataViaApi({
      url: testApi.testPostAPI.api,
      body,
    });
  },
};
