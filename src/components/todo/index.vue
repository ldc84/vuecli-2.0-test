<template>
  <div class="todo">
    <div>
      <h2>Todo List</h2>

      <TodoHeader />
      <Todo />
      <TodoFooter />
    </div>
  </div>
</template>

<script>
import TodoHeader from './todoHeader.vue'
import Todo from './todo.vue'
import TodoFooter from './todoFooter.vue'

export default {
  data () {
    return {

    }
  },
  components : {
    TodoHeader,
    Todo,
    TodoFooter
  }
}
</script>

<style scoped>
  .todo > div {
    max-width:960px;
    margin:0 auto;
  }
  h2 {
    margin-bottom:30px;
  }
</style>
