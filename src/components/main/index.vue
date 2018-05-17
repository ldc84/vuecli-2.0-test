<template>
  <div id="main">
    <router-link to="/test/HelloWorld">메인</router-link>
    <span @click="lodashTest">lodash</span>
    <div>
      {{ time }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  mounted() {
    this.setTime();
  },
  data () {
    return {
      time : moment(new Date()).format('LTS')
    }
  },
  methods : {
    lodashTest () {
      var array = [1];
      var other = _.dropRight([1, 2, 3], 0);

      console.log(other);
    },
    setTime () {
      return setInterval(() => this.time = moment(new Date()).format('LTS'), 1000) ;
    }
  }
}
</script>

<style scoped>
  #main {
    padding:50px;
    background:rgba(0,255,0,0.5);
  }
</style>
