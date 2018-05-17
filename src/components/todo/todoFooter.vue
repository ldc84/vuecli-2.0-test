<template>
  <div class="footer">
    <el-row type="flex" justify="space-between">
      <el-col :span="12" class="left">
        <p>
          {{ total }}
          개 등록
        </p>
      </el-col>
      <el-col :span="12" class="right">
        <el-button type="warning" @click="delChoice">선택 삭제</el-button>
        <el-button type="danger" @click="delAll">전체 삭제</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      
    }
  },
  computed : {
    total() {
      return this.$store.state.todoList.length;
    }
  },
  methods : {
    // ...mapMutations([
    //   'delChoice'
    // ]),
    delChoice() {
      const listLeng = this.$store.state.todoList.length;
      const sel = _.every(this.$store.state.todoList, ['check', false]);
      (sel || listLeng <= 0) ? this.errorMsg('선택된 리스트가 없습니다.') : this.$store.commit('delChoice') ;
    },
    delAll() {
      const listLeng = this.$store.state.todoList.length;
      (listLeng <= 0) ? this.errorMsg('리스트를 추가해 주세요.') : this.$store.commit('delAll') ;
    },
    errorMsg(msg) {
      this.$notify({
        title: 'Warning',
        message: msg,
        type: 'warning'
      });
    }
  }
}
</script>

<style scoped>
  .left {
    text-align:left;
  }
  .right {
    text-align:right;
  }
</style>
