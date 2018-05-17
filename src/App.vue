<template>
  <div id="app">
    <div id="header">
      <router-view name="header"></router-view>
    </div>
    <div id="body">
      <router-view name="body"></router-view>
    </div>
    <div id="footer">
      <router-view name="footer"></router-view>
    </div>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style src="../static/css/common.css"></style>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  #body {
    padding:50px 0;
  }
</style>
