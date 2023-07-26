<template>
  <v-list 
    nav
    height="4rem"
    class="d-flex align-center"
  >
  <!--用户头像-->
  <v-list-item
    prepend-avatar="@/assets/logo.png"
    title="user"
    subtitle="user@114514.com"
    to="/account"
  ></v-list-item>
  </v-list>

  <v-divider :thickness="2" color="primary"></v-divider>

<!--侧边栏项-->
  <v-list density="compact" nav>
    <v-list-item prepend-icon="mdi-view-dashboard" title="仪表板" value="dashboard"
      to="/">
    </v-list-item>
    <v-list-item prepend-icon="mdi-checkbox-blank-off" title="小黑屋" value="blacklist"
      to="/blacklist">
    </v-list-item>
    <v-list-item prepend-icon="mdi-information" title="关于" value="about"
      to="/about">
    </v-list-item>
  </v-list>
</template>

<script setup>
//import { RouterLink } from "vue-router";
</script>