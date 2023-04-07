import { defineStore } from "pinia";
import { getHotSuggests } from "@/api";

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
  },
});

export default useHome;
