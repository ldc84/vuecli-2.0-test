<template>
  <div class="todo">
    <ul class="todo-list">
      <transition name="el-zoom-in-center">
        <li v-if="todoList.length <= 0">
          <p class="none">입력된 메뉴가 없습니다.</p>
        </li>
      </transition>
      <transition-group name="el-zoom-in-center">
        <li v-for="(todo, key) in todoList" :key="key" v-if="todoList.length >= 0">
          <p class="text" v-if="!todo.edit" :class="{active : todo.check}" @dblclick="editText(todo)">
            <el-checkbox v-model="todo.check">
              <span>{{ todo.name }}</span>
            </el-checkbox>
          </p>
          <div class="inp" v-else>
            <el-input size="small" v-model="todo.name" @keyup.enter.native="editText(todo)" @blur="todo.edit = false"></el-input>
          </div>
          <el-button-group class="btn">
            <el-button type="danger" size="mini" icon="el-icon-edit" @click="editText(todo)"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="delTodo(key)"></el-button>
          </el-button-group>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data () {
    return {
      
    }
  },
  computed : {
    ...mapState([
      'todoList'
    ])
  },
  methods : {
    ...mapMutations([
      'delTodo'
    ]),
    editText(todo) {
      todo.edit = !todo.edit;
    }
  }
}
</script>

<style scoped>
  .todo {
    margin:0 0 30px 0;
    border:1px solid #ccc;
    border-radius:5px;
    box-shadow:1px 1px 5px 0 #ededed;
  }
  .todo-list {
    padding:10px;
  }
  .todo-list li {
    position:relative;
    padding:5px 10px;
    border-top:1px solid #ececec;
    transition:0.5s all cubic-bezier(0.19, 1, 0.22, 1);
  }
  .todo-list li:hover {
    background-color:#f1f1f1;
  }
  .todo-list li:first-child {
    border-top:none;
  }
  .todo-list li .text {
    height:32px;
    line-height:32px;
  }
  .todo-list li .text span {
    transition:0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .todo-list li .text.active {
    color:#999;
  }
  .todo-list li .text.active span {
    text-decoration:line-through;
  }
  .todo-list li .inp {
    width:80%;
  }
  .todo-list li .btn {
    position:absolute; top:50%; right:0;
    transform:translateY(-50%);
  }
  .todo-list li .none {
    text-align:center;
  }
</style>
