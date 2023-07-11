<template>
  <div class="account mdui-container">
      <h1 class="qwingin-left-line qwingin-font-teal">小黑屋</h1>
      <div class="mdui-panel" mdui-panel>
        <div class="mdui-chip" v-for="user in blacklist" :key="user">
          <span class="mdui-chip-title">{{ user }}</span>
        </div>
      </div>
  </div>
</template>

<script>
import '@/assets/subs/banned.css';
import store from "@/scripts/vuex/store"
//import { computed } from 'vue';
const blacklist = store.getters.getBlackListUsers;
//import { mapGetters } from 'vuex';

export default {
  computed: {
    blacklist() {
      return store.getters.getBlackListUsers.users;
    },
  },
};
//console.log(blacklist)
</script>
