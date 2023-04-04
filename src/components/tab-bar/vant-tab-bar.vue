<script setup>

import tabbarData from '@/assets/data/tab-bar'
import { getAssetURL } from '@/utils/load-assets'
import { ref } from 'vue';

const currentIndex = ref(0)

</script>

<template>
  <div class="vant-tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
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
