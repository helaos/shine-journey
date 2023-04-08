<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearchBox from './components/home-search-box.vue'
import HomeCategories from './components/home-categories.vue'
import HomeContent from './components/home-content.vue'
import useHome from '@/stores/modules/home'
import useScroll from '@/hooks/use-scroll'
import { computed, watch } from 'vue'
import { showToast } from 'vant'

// 发送网络请求
const homeStore = useHome()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

// 回调方式
// useScroll(() => homeStore.fetchHouseListData())

const { isReachBottom, scrollTop } = useScroll()
console.log(isReachBottom.value);

watch(isReachBottom, newStatus => {
  if (newStatus) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    }).catch(() => {
      showToast("网络异常")
    })
  }
})

// 搜索框显示控制
// const isShowSearchBar = ref(false)

// watch(scrollTop, newStatus => {
//   isShowSearchBar.value = newStatus > 100
// })

// 定义的可响应式数据，依赖另外一个可响应式的数据，南无可以使用计算属性(computed)
const isShowSearchBar = computed(() => scrollTop.value >= 100)


</script>

<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
    <HomeCategories />
    <div class="search-bar" v-if="isShowSearchBar">sss</div>
    <HomeContent />
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
