<template>
    <el-row class="tac qwingin-aside-bar">
        <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <!-- 侧边导航 -->

                <!-- 1 -->
                <el-menu-item index="1">
                    <nuxt-link to="/dashboard">
                        <i class="el-icon-location"></i>
                        <span slot="title">仪表板</span>
                    </nuxt-link>
                </el-menu-item>

                <!-- 2 -->
                <el-menu-item index="2">
                    <nuxt-link to="/account">
                        <i class="el-icon-menu"></i>
                        <span slot="title">账户</span>
                    </nuxt-link>
                </el-menu-item>

                <!-- 3 -->
                <el-menu-item index="3">
                    <nuxt-link to="/blacklist">
                        <i class="el-icon-setting"></i>
                        <span slot="title">小黑屋</span>
                    </nuxt-link>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>