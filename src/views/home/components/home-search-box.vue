<script setup>
import { showFailToast } from 'vant'
import { useRouter } from 'vue-router';

const router = useRouter();

// 点击获取 位置/城市 信息
const cityClick = () => {
  router.push("/city")
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res.data);
  }, err => {
    console.log("获取失败: " + err)
    showFailToast("获取地理位置失败！")
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

</script>

<template>
  <div class="search-box">
    <div class="location" >
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <div class="text">我的位置</div>
        <img src="@/assets/image/home/icon_location.png" alt="">
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
