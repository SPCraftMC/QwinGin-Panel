<script setup>
import showdown from "showdown/dist/showdown.min"
import about from '@/scripts/axios/about'

const converter = new showdown.Converter()
about((s) => {
    document.getElementById("domx").innerHTML = converter.makeHtml(s.content);
    document.getElementById("domxx").style.display = "none";
})
</script>

<template>
    <div class="about mdui-container">
        <h1 class="qwingin-left-line qwingin-font-teal">关于</h1>
        
        <div class="mdui-card mdui-typo mdui-text-left">
            <ion-icon name="logo-github"></ion-icon>
            <a target="_blank" href="https://github.com/SPCraftMC/QwinGin-Panel">SPCraftMC/QwinGin-Panel</a>
        </div>
        <div class="mdui-card">
            <h1 class="mdui-float-right">README.md</h1>
            <div id="domxx" class="mdui-progress">
                <div class="mdui-progress-indeterminate"></div>
            </div>
            <div class="mdui-typo" id="domx"></div>
        </div>
    </div>
</template>