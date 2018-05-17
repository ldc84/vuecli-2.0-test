<template>
  <div class="test">
    Child Double Counter : {{ doubleCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    }
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  }
}
</script>

<style scoped>

</style>
