import request from "@/utils/request";

export const getHotSuggests = () => {
  return request({
    url: "/home/hotSuggests",
    method: "get",
  });
};

export const getHomeCategories = () => {
  return request({
    url: "/home/categories",
    method: "get",
  });
};
