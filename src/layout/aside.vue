<template>
    <el-row class="tac qwingin-aside-bar">
        <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <!-- 侧边导航 -->

                <!-- 1 -->
                <nuxt-link to="/dashboard">
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">仪表板</span>
                    </el-menu-item>
                </nuxt-link>

                <!-- 2 -->
                <nuxt-link to="/account">
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">账户</span>
                    </el-menu-item>
                </nuxt-link>

                <!-- 3 -->
                <nuxt-link to="/blacklist">
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">小黑屋</span>
                    </el-menu-item>
                </nuxt-link>
            </el-menu>
        </el-col>
    </el-row>
</template>