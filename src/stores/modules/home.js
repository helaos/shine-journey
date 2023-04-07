import { defineStore } from "pinia";
import { getHotSuggests, getHomeCategories, getHomeHouseList } from "@/api";

const useHome = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage++);
      this.houseList.push(...res.data);
    },
  },
});

export default useHome;
