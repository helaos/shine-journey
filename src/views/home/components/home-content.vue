<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import CardItemT9 from '@/components/card-item/card-item-t9.vue'
import CardItemT3 from '@/components/card-item/card-item-t3.vue'
const homeStore = useHome()
const { houseList } = storeToRefs(homeStore)

</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(house, index) in houseList" :key="house.data.houseId">
        <CardItemT9
          v-if="house.discoveryContentType === 9"
          :card-data="house.data"
        />
        <CardItemT3
          v-else-if="house.discoveryContentType === 3"
          :card-data="house.data"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
