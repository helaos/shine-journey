import request from "@/utils/request";

export const getHotSuggests = () => {
  return request({
    url: "/home/hotSuggests",
    method: "get",
  });
};
