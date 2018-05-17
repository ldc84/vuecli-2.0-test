<template>
  <div class="test">
    <div>
      Parent Counter : {{ counter }} <br>
      Parent Double Counter : {{ doubleCounter }} <br>
      <button @click="addCounter">+</button>
      <button @click="subCounter">-</button>
      <button @click="tenCounter(10)">+10</button>
      <button @click="doubleCounter2(20)">+20</button>

      <Child></Child>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Child from './Child.vue'
export default {
  data () {
    return {

    }
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },
    ...mapState([
      'counter'
    ]),
    // doubleCounter() {
    //   return this.$store.getters.doubleCounter;
    // }
    ...mapGetters([
      'doubleCounter'
    ])
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    },
    // tenCounter() {
    //   this.$store.commit('tenCounter', 10);    // mutations 의 methods를 바라봄
    // },
    ...mapMutations([
      'tenCounter'
    ]),
    // doubleCounter2() {
    //   this.$store.dispatch('doubleCounter2');  // actions 의 methods를 바라봄
    // },
    ...mapActions([
      'doubleCounter2'
    ]),
    timer() {
      const arr = [10, 12, 15, 21];
      for (var i = 0; i < arr.length; i++) {
        // i 값 을 setTime 함수 안에 전달하여 각 함수 호출마다 올바른 값에 접근하게 합니다.
        setTimeout(function(i_local) {
          return function() {
            console.log('The index of this number is: ' + i_local);
          }
        }(i), 3000);
      }
    }
  },
  components: {
    Child
  }
}
</script>

<style scoped>
  .test > div {
    max-width:960px;
    margin:0 auto;
  }
</style>
