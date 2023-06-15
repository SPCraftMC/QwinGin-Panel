<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="mdui-drawer" id="left-drawer">
        <ul class="mdui-list">
            <router-link to="/">
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">dashboard</i>
                    <div class="mdui-list-item-content">仪表板</div>
                </li>
            </router-link>
            <router-link to="/account">
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">account_circle</i>
                    <div class="mdui-list-item-content">账户</div>
                </li>
            </router-link>
        </ul>
    </div>
</template>