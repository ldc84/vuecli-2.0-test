<template>
  <div class="header">
    <el-row type="flex" :gutter="10" justify="center">
      <el-col :span="2">
        <p class="total-check">
          <el-checkbox v-model="allCheck" @change="totalCheck">전체</el-checkbox>
        </p>
      </el-col>
      <el-col :span="19">
        <el-input placeholder="점심메뉴 입력" v-model="input" @keyup.enter.native="addTodo"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" class="block" @click="addTodo">확인</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data () {
    return {
      input : this.$store.state.todoInp,
      allCheck : this.$store.state.allChx
    }
  },
  computed : {
    // allCheck() {
    //   const list = this.$store.state.todoList;
    //   return _.every(list, [check, false]) ? this.allCheck = false : this.allCheck = true ;
    //   console.log(_.every(list, [check, false]));
    // }
    ...mapState([
      'allChx'
    ])
  },
  methods : {
    addTodo() {
      this.$store.commit('todoList', this.input);
      this.input = '';
    },
    totalCheck() {
      const list = this.$store.state.todoList;
      const bool = this.allCheck;
      _.mapValues(list, (chx)=> chx.check = bool )
    }
  }
}
</script>

<style scoped>
  .header {
    margin-bottom:30px;
    padding:20px;
    border:1px solid #ccc;
    border-radius:5px;
    box-shadow:1px 1px 5px 0 #ededed;
  }
  .block {
    display: block;
    width:100%;
  }
  .total-check {
    line-height:40px;
  }
</style>
