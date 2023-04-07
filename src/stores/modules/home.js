import { defineStore } from "pinia";
import { getHotSuggests, getHomeCategories } from "@/api";

const useHome = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data
    }
  },
});

export default useHome;
