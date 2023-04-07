<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearchBox from './components/home-search-box.vue'
import HomeCategories from './components/home-categories.vue'
import useHome from '@/stores/modules/home'

// 发送网络请求
const homeStore = useHome()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()

</script>

<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
    <HomeCategories />
    
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    border-radius: 6px;
  }
}

</style>
