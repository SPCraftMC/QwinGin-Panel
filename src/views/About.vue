<template>
  <v-card
    height="80vh"
    width="88vw"
  >
    <v-card-item class="d-flex justify-center mt-6">
      <span class="text-h6">本项目仓库</span>
    </v-card-item>
    <v-card-item class="d-flex justify-center">
      <v-chip
        color="primary"
        text-color="white"
        size="x-large"
        href="https://github.com/SPCraftMC/QwinGin-Panel"
      >
        <v-icon start icon="mdi-github"></v-icon>
        「青镜」玩家管理面板 (QwinGin-Panel)
      </v-chip>
    </v-card-item>
    <!--彩蛋-->
    <v-overlay 
      v-model="overlay"
      scroll-strategy="close"
      class="d-flex align-center justify-center"
      contained
    >
      <v-img
        width="16rem"
        aspect-ratio="1/1"
        src="@/assets/rip.png"
      ></v-img>
      <v-chip
        size="x-large"
        color="pink"
        href="https://呆洋橙🥰🥰🤤🤤🤤.1l1.icu"
        :style="{'margin-top': '1rem'}"
      >
        戳这里看dyc姐姐的性感写真
      </v-chip>
    </v-overlay>
    <v-card-item class="d-flex justify-center mt-6">
      <span class="text-h6">其他项目仓库</span>
    </v-card-item>
    <v-card-item class="d-flex justify-center">
      <v-chip
        color="primary"
        text-color="white"
        size="x-large"
        href="https://github.com/SPCraftMC/EnShii-Daemon"
      >
        <v-icon start icon="mdi-github"></v-icon>
        ╭映水╯守护进程 (EnShii-Daemon)
      </v-chip>
    </v-card-item>
    <v-card-item class="d-flex justify-center">
      <v-chip
        color="primary"
        text-color="white"
        size="x-large"
        href="https://github.com/SPCraftMC/EurWin-Node"
      >
        <v-icon start icon="mdi-github"></v-icon>
        ◤月莹◢节点 (EurWin-Node)
      </v-chip>
    </v-card-item>
    <v-card-item class="d-flex align-center justify-center mt-6">
      <span class="text-h6">文档</span>
    </v-card-item>
    <v-card-item class="d-flex align-center justify-center">
      <v-chip
        color="primary"
        text-color="white"
        size="x-large"
        href="https://docs.1l1.icu/SPCraftMC/product/QwinGin-Panel"
      >
        <v-icon start icon="mdi-file-document"></v-icon>
        「青镜」部署及使用文档
      </v-chip>
    </v-card-item>
    <v-divider
      :thickness="10"
      color="primary"
      class="mt-4"
    ></v-divider>
    <v-card-item class="d-flex justify-center">
        Open Source LICENSE: GPL-3.0 | By SPCraftMC & maincore_tech. | Made with 
      <v-chip 
        variant="text"
        @click="overlay = !overlay"
      ><span style='color: red'>❤</span>
      </v-chip>.
    </v-card-item>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 5000)
      },
    },
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
  }
</style>