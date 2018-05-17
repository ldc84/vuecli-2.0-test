import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state : {
    counter: 0, // Vuex Test
    allChx : false,
    todoInp: '',
    todoList: []
  },

  getters : {
    // Vuex Test
    doubleCounter: function (state) {
      return state.counter * 2;
    }
  },

  mutations : {
    // Vuex Test
    // payload 는 일반적으로 사용하는 인자 명
    tenCounter: function (state, payload) {
      // return state.counter++;
      state.counter = state.counter + payload;
    },

    todoList(state, payload) {
      if(payload == '') return
      const obj = {
        name : payload,
        edit : false,
        check : false
      }
      state.todoList.push(obj);
    },
    
    delTodo(state, payload) {
      state.todoList.splice(payload,1);
    },

    delChoice(state) {
      // const arr = [];
      // const list = state.todoList;
      // _.map(state.todoList, (list, idx) => {
      //   if(list.check) {
      //     arr.push(idx);
      //   }
      // });

      // _.each(arr, (n) => {
      //   console.log(n);
      //   list.splice(n, 1);
      // });
      state.todoList = _.filter(state.todoList, (list) => {
        return !list.check;
      });

    },
    delAll(state) {
      state.todoList.splice(0,state.todoList.length);
    }
  },

  actions : {
    // Vuex Test
    doubleCounter2: function(context, payload) {
      // commit 의 대상인 tenCounter 는 mutations 의 메서드를 의미한다.
      return context.commit('tenCounter', 20);
    }
  }
});