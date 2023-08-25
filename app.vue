<template>
  <el-config-provider :locale="zhCn">
    <el-container>

      <el-header>
        <Header />
      </el-header>

      <el-container>

        <el-aside width="200px">
          <Aside />
        </el-aside>

        <el-main>
          <Main />
        </el-main>

      </el-container>

      <el-footer>
        <Footer />
      </el-footer>

    </el-container>

    <el-backtop :right="100" :bottom="100" />
  </el-config-provider>
</template>

<script setup>
// Layout
import Header from '@/src/layout/header.vue'
import Aside from '@/src/layout/aside.vue'
import Main from '@/src/layout/main.vue'
import Footer from '@/src/layout/footer.vue'

import '@/src/style/style.css'
import '@/src/style/el.css'

// Element+ Config
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const route = useRoute()

if (route.path === "/") {
  route.push("/dashboard")
}
</script>