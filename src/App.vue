<template>
  <router-view />
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.3s;
  font-size: 14px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>