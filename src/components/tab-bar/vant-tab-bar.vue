<script setup>

import tabbarData from '@/assets/data/tab-bar'
import { getAssetURL } from '@/utils/load-assets'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const currentIndex = ref(0)
watch(route, newRoute => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) {
    return
  }
  currentIndex.value = index
})

</script>

<template>
  <div class="vant-tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(tab, index) in tabbarData" :key="tab.text">
        <van-tabbar-item :to="tab.path">
          <span class="text">{{ tab.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(tab.image)" alt="">
            <img v-else :src="getAssetURL(tab.imageAction)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.vant-tab-bar {

  img {
    height: 28px;
  }

}
</style>
