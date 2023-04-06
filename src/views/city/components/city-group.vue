<script setup>
import { computed } from 'vue';

const props = defineProps({
  groupDate: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupDate.cities.map(item => item.group)
  list.unshift("#")
  return list
})

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
          <div class="city">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupDate.cities" :key="index">
        <VanIndexAnchor :index="group.group" />
        <template v-for="(city, index) in group.cities" :key="index">
          <VanCell :title="city.cityName" />
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
