import { defineStore } from "pinia";

const startDate = new Date();
const endDate = new Date().setDate(startDate.getDate() + 1);

const useMain = defineStore("main", {
  state: () => ({
    token: "",
    startDate: startDate,
    endDate: endDate
  }),
  actions: {},
});

export default useMain;
