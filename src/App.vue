<script setup>
import TabBar from '@/components/tab-bar/vant-tab-bar.vue'
import { useRoute } from 'vue-router';
import Loading from '@/components/loading/loading.vue'
const route = useRoute()
</script>

<template>
  <div id="app">
    <RouterView />
    <TabBar v-if="!route.meta.hideTabBar" />
    <!-- 加载框 -->
    <Loading />
    <!-- 消息框 -->
    <VanToast />
  </div>
</template>

<style scoped>

</style>
