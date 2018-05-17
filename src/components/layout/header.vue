<template>
  <header>
    <div>
      <ul class="top-utill">
        <li>
          <router-link to="/login" @click.native="gnbActive">Login</router-link>
        </li>
        <li>
          <router-link to="/join" @click.native="gnbActive">Join</router-link>
        </li>
      </ul>
      <el-row type="flex" align="middle" :gutter="20">
        <el-col :span="24">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="0">
              <h1 ref="logo">
                <router-link to="/" class="logo-router">
                  <img src="@/assets/logo.png" alt="">
                </router-link>
              </h1>
            </el-menu-item>
            <!-- <el-submenu index="2">
              <template slot="title">Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-submenu> -->
            <el-menu-item index="1">
              <router-link to="/test/vuex">Vuex</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/todo/">TodoList</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/socket/">WebSocket</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods : {
    gnbActive () {
      const elem = this.$refs.logo
      elem.click()
    }
  }
}
</script>

<style scoped>
  header {
    box-shadow: 0 0 5px 3px #ddd;
  }
  header > div {
    max-width:960px;
    margin:0 auto;
  }
  h1 {
    font-size:0;
    line-height:0;
  }
  .top-utill {
    text-align:right;
    font-size:0; line-height:0;
  }
  .top-utill li {
    display: inline-block;
    padding:10px;
    font-size:12px;
    line-height:14px;
  }
  .top-utill li a {
    color:#999;
  }
  .top-utill li + li {
    position:relative;
  }
  .top-utill li + li:before {
    content:'';
    position: absolute; top:12px; left:0;
    display: block;
    width:1px;
    height:10px;
    background:#e2e2e2;
  }
</style>
