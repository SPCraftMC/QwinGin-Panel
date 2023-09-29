<template>
  <el-config-provider :locale="zhCn">
    <el-container>

      <Progress />

      <el-header>
        <Header />
      </el-header>

      <el-container>

        <el-aside width="300px">
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
import statuz from '@/src/script/vuex/statuz'

// Layout
import Header from '@/src/layout/header.vue'
import Aside from '@/src/layout/aside.vue'
import Main from '@/src/layout/main.vue'
import Footer from '@/src/layout/footer.vue'
import Progress from '@/src/layout/progress.vue'

import '@/src/style/style.css'
import '@/src/style/el.css'

// Element+ Config
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const route = useRoute()
const router = useRouter()

setInterval(() => {
  if (route.path === "/") router.push({ path: "/dashboard" })
})
statuz.commit("loading", false)
</script>