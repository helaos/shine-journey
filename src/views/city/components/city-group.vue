<script setup>

defineProps({
  groupDate: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="city-group">
    <vanIndexBar :sticky="false">
      <template v-for="(group, index) in groupDate.cities" :key="index">
          <VanIndexAnchor :index="group.group" />
          <template v-for="(city, index) in group.cities" :key="index">
            <VanCell :title="city.cityName" />
          </template>
      </template>
    </vanIndexBar>
  </div>
</template>

<style lang="less" scoped>

</style>
