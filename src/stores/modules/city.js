import { getCityAll } from '@/api'
import { defineStore } from 'pinia'

const useCity = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: { 
      cityName: "广州"
    },
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCity
