<template>
  <v-card
    width="90%"
    max-width="20vw"
  >
    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="vertical"
        class="mt-4"
      >
        <v-tab value="login" rounded="e-xl">
          <v-icon start>
            mdi-login
          </v-icon>
        登录</v-tab>
        <v-tab value="register" rounded="e-xl">
          <v-icon start>
            mdi-account-plus
          </v-icon>
        注册</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="login">
          <v-card height="18rem" width="24rem">
            <v-text-field v-model="loginData.name" label="用户名" variant="solo-filled" class="mx-6 mt-10"></v-text-field>
            <v-text-field v-model="loginData.password" label="密码" variant="solo-filled" class="mx-6"></v-text-field>
            <v-card-item class="text-right" width="24rem">
              <v-btn @click=clogin.login(loginData) size="large" rounded="s-xl" height="3.3rem" variant="tonal" class="mr-2">
                登录
              </v-btn>
            </v-card-item>
          </v-card>
        </v-window-item>
        <v-window-item value="register">
          <v-card height="27.8rem" width="24rem">
            <v-text-field label="用户名" :rules="[required]" variant="solo-filled" class="mx-6 mt-10"></v-text-field>
            <v-text-field label="邮箱" :rules="[required]" variant="solo-filled" class="mx-6"></v-text-field>
            <v-text-field label="密码" :rules="[required]" variant="solo-filled" class="mx-6"></v-text-field>
            <v-text-field label="确认密码" :rules="[required]" variant="solo-filled" class="mx-6"></v-text-field>
            <v-card-item class="text-right" width="24rem">
              <v-btn size="large" rounded="s-xl" height="3.3rem" variant="tonal" class="mr-2">
                注册
              </v-btn>
            </v-card-item>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
//import qvar from "@/scripts/qvar"
//import store from "@/scripts/vuex/store";
import clogin from "@/scripts/core/login";

/*let params = ref({
    code: qvar("code"),
    error: {
        orgin: qvar("error"),
        decoded: decodeURI(qvar("error"))
    }
})*/

let loginData = ref({
    name: "",
    password: "",
    push: "/"
})

/*if (qvar("to") != null) {
    data.push = qvar("to")
}*/


</script>

<script>
  export default {
    data: () => ({
      tab: 'login'
    }),
    methods: {
      required (v) {
        return !!v || '必填项'
      },
    },
  }
</script>