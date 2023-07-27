<template>
  <v-app>
    <v-dialog
          v-model="dialog"
          persistent
          width="auto"
        >
          <login-dialog />
        </v-dialog>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer
        expand-on-hover
        rail
        floating
        permanent
      >
        <left-bar/>
      </v-navigation-drawer>
      <top-bar/>
        <v-main class="d-flex align-center justify-center">
          <v-skeleton-loader
            :loading="loading"
            height="200rem"
            width="100rem"
          >
          <router-view />
        </v-skeleton-loader>
      </v-main>
    </v-layout>
    <Footer/>
  </v-app>
</template>

<script setup>
  import Footer from '@/components/Footer.vue'
  import TopBar from '@/components/TopBar.vue'
  import LeftBar from '@/components/LeftBar.vue'
  import LoginDialog from '@/components/LoginDialog.vue'
  import authinfo from '@/scripts/vuex/authinfo'
  import { RouterView } from 'vue-router'
  
</script>

<script>
/*export default {
  data() {
    if(authinfo.getters.getToken === "") {
      return {
        dialog: true,
        loading: true
      }
    } else {
      return {
        dialog: false,
        loading: false
      }
    }
  }
}*/
export default {

  mounted(){
    this.timer = window.setInterval(() => {
      setTimeout(() => {
        this.isLogin()
      }, 1)
    }, 300);
  },
  unmounted(){
    clearInterval(this.timer)
  },data() {
    if(authinfo.getters.getToken === "") {
      return {
        dialog: true,
        loading: true
      }
    } else {
      return {
        dialog: false,
        loading: false
      }
    }
  },
  methods: {
    isLogin () {
      if (authinfo.getters.getToken === "") {
        this.dialog = true,
        this.loading = true
      } else {
        this.dialog = false,
        this.loading = false
      }
    },
  },
}
</script>