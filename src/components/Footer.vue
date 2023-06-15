<script setup>
import store from "@/scripts/vuex/store";
</script>

<template>
    <footer class="mdui-appbar mdui-shadow-0 mdui-typo qwingin-footer">
    
        <div class="qwingin-footer-divider mdui-divider"></div>
        
        <!-- Left -->
        <div class="mdui-float-left" style="background: none">
            <span class="qwingin-copyright" v-html=store.getters.__config.settings.footer.copyright></span>
        </div>

        <!-- Right -->
        <div class="mdui-float-right">
        
        </div>
        
    </footer>
</template>