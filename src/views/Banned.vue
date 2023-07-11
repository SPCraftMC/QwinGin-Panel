<template>
  <div class="account mdui-container">
      <h1 class="qwingin-left-line qwingin-font-teal">小黑屋</h1>
      <div class="mdui-panel" mdui-panel>
        <div class="mdui-chip" v-for="bannedUsers in users" :key="bannedUsers">
          <span class="mdui-chip-title">{{ bannedUsers }}</span>
        </div>
        <div class="card">
          <pre>{{ users }}</pre>
        </div>
      </div>
  </div>
</template>

<script setup>
import '@/assets/subs/banned.css';
import store from "@/scripts/vuex/store"
//import { computed } from 'vue';

const users = store.getters.getBlackListUsers;

//若不是，应当插入转换getters为数组代码
</script>
