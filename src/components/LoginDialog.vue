<template>
  <v-card
    width="23rem"
  >
    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="vertical"
        :style="{'margin-top': '1rem', 'margin-right': '1rem'}"
        width="2rem"
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
          <v-sheet width="17.5rem">
            <v-text-field v-model="loginData.name" label="用户名" variant="solo-filled" :style="{'margin-right': '2rem', 'margin-top': '1rem'}"></v-text-field>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-login"
              @click:append="show = !show"
              v-model="loginData.password"
              label="密码"
              variant="solo-filled"
              style="margin-right: 2.7em"
            >
            </v-text-field>
            <v-sheet class="text-right">
              <v-btn @click=clogin.login(loginData) size="large" rounded="s-xl" height="3.3rem" variant="tonal" :style="{'margin-right': '2rem', 'margin-bottom': '1rem'}">
                登录
              </v-btn>
            </v-sheet>
          </v-sheet>
        </v-window-item>
        <v-window-item value="register">
          <v-sheet width="17.5rem">
            <v-text-field v-model="registerData.name" label="用户名" variant="solo-filled" :style="{'margin-right': '2rem', 'margin-top': '1rem'}"></v-text-field>
            <v-text-field v-model="registerData.email" label="邮箱" variant="solo-filled" style="margin-right: 2rem"></v-text-field>
            <v-text-field v-model="registerData.password" label="密码" variant="solo-filled" style="margin-right: 2rem"></v-text-field>
            <v-text-field v-model="registerData.confirm_password" label="验证密码" variant="solo-filled" style="margin-right: 2rem"></v-text-field>
            <v-sheet class="text-right">
              <v-btn @click=cregister.register(registerData) size="large" rounded="s-xl" height="3.3rem" variant="tonal" :style="{'margin-right': '2rem', 'margin-bottom': '1rem'}">
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
//import store from "@/scripts/vuex/store"
import clogin from "@/scripts/core/login"
import cregister from "@/scripts/core/register"

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

let registerData = ref({
    name: "",
    password: "",
    confirm_password: "",
    email: "",
    push: "/auth/login"
})

/*if (qvar("to") != null) {
    data.push = qvar("to")
}*/


</script>

<script>
  export default {
    data: () => ({
      tab: 'login',
      show: false,
    }),
    methods: {
      required (v) {
        return !!v || '必填项'
      },
    },
  }
</script>
