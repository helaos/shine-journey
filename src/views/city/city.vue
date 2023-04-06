<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCity from '@/stores/modules/city';
import CityGroup from './components/city-group.vue'

// 搜索栏功能点
const router = useRouter()
const searchValue = ref("")

const cancelClick = () => {
  router.back()
}

// Tab栏
const tabActive = ref(0)

// 城市数据
// const allCity = ref({})
// getCityAll().then(res => {
//   // 得到数据
//   allCity.value = res.data
//   console.log(res.data);
// }).catch(err => {
// })

// 从Store中获取数据
const cityStore = useCity()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 选中标签数据
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <VanSearch v-model="searchValue" :show-action="true" placeholder="城市/区域/位置" shape="round" @cancel="cancelClick" />
      <!-- Tab标签页 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <CityGroup :group-date="currentGroup" />
    </div>

  </div>
</template>

<style lang="less" scoped>
.city {

  // Top固定定位
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content {
  //   margin-top: 98px;
  // }

  // 局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
