<template>
  <div class="account mdui-container">
      <h1 class="qwingin-left-line qwingin-font-teal">小黑屋</h1>
      <div class="mdui-panel" mdui-panel>
        
        
      </div>
  </div>
</template>

<script>
import '@/assets/subs/banned.css';
import store from "@/scripts/vuex/store"
const blacklist = store.getters.getBlackList;

export default {
  computed: {
    blacklist() {
      return store.getters.getBlackList;
    },
  },
};
console.log(blacklist)
</script>
