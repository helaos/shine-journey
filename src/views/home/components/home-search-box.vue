<script setup>
import useCity from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { showFailToast } from 'vant'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatMonthDay, getDiffDays } from '@/utils/date-util'

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

// 获取当前城市
const cityStore = useCity()
const { currentCity } = storeToRefs(cityStore)

// 时间范围
const nowDate = new Date()
const nextDate = new Date().setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(nextDate))
const stayCount = ref(1)

const showCalendar = ref(false)
const onConfirm = rangeValue => {
  const selectStartDate = rangeValue[0]
  const selectEndDate = rangeValue[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  // 计算时间差
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  // 隐藏日历
  showCalendar.value = false
}

</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location" >
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <div class="text">我的位置</div>
        <img src="@/assets/image/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <VanCalendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
    />
  </div>
</template>

<style lang="less" scoped>

.search-box {
  --van-calendar-popup-height: 100%;
}

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

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>
