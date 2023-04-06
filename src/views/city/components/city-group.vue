<script setup>
import useCity from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  groupDate: {
    type: Object,
    default: () => ({})
  }
})

// 动态获取索引
const indexList = computed(() => {
  const list = props.groupDate.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市的点击
const router = useRouter()
const cityStore = useCity()
const cityClick = city => {
  console.log(city);
  // 当前选中的城市
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}

</script>

<template>
  <div class="city-group">
    <vanIndexBar 
      :sticky="false" 
      :index-list="indexList" 
      highlight-color="#ff9854"
    >
      <!-- 热门 -->
      <VanIndexAnchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupDate.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupDate.cities" :key="index">
        <VanIndexAnchor :index="group.group" />
        <template v-for="(city, index) in group.cities" :key="index">
          <VanCell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </vanIndexBar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-style: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #FFF4EC;
    margin: 6px 0;
  }
}
</style>
