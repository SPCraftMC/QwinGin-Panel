<template>
<!--用户头像-->
  <v-list nav>
    <v-avatar
      color="surface-variant"
      size="40"
    >
    </v-avatar>
  </v-list>

  <v-divider></v-divider>

<!--侧边栏项-->
  <v-list density="compact" nav>
    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
  </v-list>
</template>