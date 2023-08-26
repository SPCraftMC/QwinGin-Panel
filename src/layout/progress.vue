<template>
    <el-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="1"
      v-if="statuz.getters.loading"
    />
</template>

<script setup>
import statuz from '@/src/script/vuex/statuz'
</script>