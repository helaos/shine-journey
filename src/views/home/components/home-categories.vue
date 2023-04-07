<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHome()
const { categories } = storeToRefs(homeStore)

</script>

<template>
  <div class="categories">
    <template v-for="(categorie, index) in categories" :key="categorie.id">
      <div class="categorie">
        <img :src="categorie.pictureUrl" alt="">
        <div class="text">{{ categorie.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  .categorie {
    display: flex;
    width: 70px;
    flex-shrink: 0;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
