<!--<template>
  <v-main>
    <router-view />
  </v-main>
</template>-->
<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
      expand-on-hover
      rail
    >
      <v-list>
        
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <default-bar/>
  

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      
    </v-main>
  </v-layout>
  <default-footer />
</template>

<script setup>
  import DefaultFooter from './Footer.vue'
  import DefaultBar from './Bar.vue'
</script>

