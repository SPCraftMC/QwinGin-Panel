<template>
  <v-card
    width="90vmin"
  >
    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="vertical"
        class="mt-4"
        width="20vmin"
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
          <v-sheet width="63vmin" class="mx-2 mt-6">
            <v-text-field v-model="loginData.name" label="用户名" variant="solo-filled" class="mx-2 mt-4"></v-text-field>
            <v-text-field v-model="loginData.password" label="密码" variant="solo-filled" class="mx-2"></v-text-field>
            <v-sheet class="text-right">
              <v-btn @click=clogin.login(loginData) size="large" rounded="s-xl" height="14vmin" variant="tonal" class="mb-6 mr-2">
                登录
              </v-btn>
            </v-sheet>
          </v-sheet>
        </v-window-item>
        <v-window-item value="register">
          <v-sheet width="63vmin" class="mx-2 mt-6">
            <v-text-field v-model="registerData.name" label="用户名" variant="solo-filled" class="mx-2 mt-4"></v-text-field>
            <v-text-field v-model="registerData.email" label="邮箱" variant="solo-filled" class="mx-2"></v-text-field>
            <v-text-field v-model="registerData.password" label="密码" variant="solo-filled" class="mx-2"></v-text-field>
            <v-text-field v-model="registerData.confirmpassword" label="重复密码" variant="solo-filled" class="mx-2"></v-text-field>
            <v-sheet class="text-right">
              <v-btn size="large" rounded="s-xl" height="14vmin" variant="tonal" class="mb-6 mr-2">
                注册
              </v-btn>
            </v-sheet>
          </v-sheet>
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
