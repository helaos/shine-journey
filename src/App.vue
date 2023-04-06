<script setup>
import TabBar from '@/components/tab-bar/vant-tab-bar.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div id="app">
    <RouterView />
    <TabBar v-if="!route.meta.hideTabBar" />
    <!-- 消息框 -->
    <VanToast />
  </div>
</template>

<style scoped>
</style>
