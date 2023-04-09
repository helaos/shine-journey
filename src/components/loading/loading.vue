<script setup>
import useMain from '@/stores/modules/main';

const mainStore = useMain()

const loadingClick = () => {
  mainStore.isLoading = false
}

</script>

<template>
  <div class="loading" v-if="mainStore.isLoading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/image/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  display: flex;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, .1);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/image/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>
