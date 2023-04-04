<script setup>

import tabbarData from '@/assets/data/tab-bar'
import { getAssetURL } from '@/utils/load-assets'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const currentIndex = ref(0)
const router = useRouter()

const tabClick = (index, toPath) => {
  currentIndex.value = index
  router.push(toPath)
}

</script>

<template>
  <div class="tab-bar">
    <template v-for="(tab, index) in tabbarData" :key="tab.text">
      <div class="tab-bar-item" :class="{ active: currentIndex === index}" 
        @click="tabClick(index, tab.path)">
        <img v-if="currentIndex !== index" :src="getAssetURL(tab.image)" alt="">
        <img v-else :src="getAssetURL(tab.imageAction)" alt="">
        <span class="text">{{ tab.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>

.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;

  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }

    img {
      width: 36px;
    }
  }
}

</style>
