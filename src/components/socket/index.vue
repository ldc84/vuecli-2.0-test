<template>
  <div class="socket">
    <div>
      <h2>Socket IO</h2>
      <div class="chat-login" v-if="!join">
        <el-input placeholder="NICK NAME" v-model="nickname" @keyup.enter.native="joinChat">
          <el-button slot="append" type="primary" @click="joinChat">Join</el-button>
        </el-input>
      </div>
      <div class="chat-box" v-else>
        <ul class="message-list">
          <li v-for="(m, index) in messages" :key="index" :class="{'me' : m.name == nickname}">
            <p class="nick">{{m.name}}</p>
            <p class="message">{{m.message}}</p>
          </li>
        </ul>
        <el-input placeholder="message please.." class="send" v-model="message" @keyup.enter.native="send">
          <el-button slot="append" type="primary" @click="send">Send</el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Io from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
const socketInstance = Io("http://localhost:3000/");

Vue.use(VueSocketio, socketInstance);

export default {
  data () {
    return {
      join: false,
      nickname: '',
      message: '',
      messages: []
    }
  },
  created() {
    socketInstance.on('chat.init-message', function(messages) {
      this.messages = messages;
    }.bind(this));
    socketInstance.on('chat.read-message', function(newMessage) {
      this.messages.push(newMessage);
    }.bind(this));
  },
  methods: {
    joinChat() {
      (this.nickname) ? this.join = true : this.join = false ;
    },
    send() {
      if (this.message) {
        socketInstance.emit('chat.message', { name: this.nickname, message: this.message });
        this.message = '';
      }
    },
    scrollToEnd() {
      const chatBox = document.querySelector('.message-list');
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  },
  updated(){
    if(this.join) this.scrollToEnd()
  }
}
</script>

<style scoped>
  .socket > div {
    position:relative;
    max-width:960px;
    margin:0 auto;
    padding:0 0 50px 0;
  }
  h2 {
    margin-bottom:30px;
  }
  .message-list {
    height:550px;
    overflow-x: hidden;
    overflow-y: auto;
    border:1px solid #eee;
  }
  .message-list li {
    padding:10px 5px;
    font-family:'NanumGothic';
    font-size:12px;
    line-height:20px;
  }
  .message-list li .nick {
    padding:0 5px;
    color:#000;
    font-size:11px;
  }
  .message-list li .message {
    position:relative;
    display:inline-block;
    padding:3px 10px;
    color:#fff;
    font-size:14px;
    background:#fd4873;
    border-radius:15px;
    word-break:break-all;
  }
  .message-list li .message:after {
    content:'';
    position:absolute; top:-3px; left:10px;
    display:inline-block;
    border-bottom:5px solid #fd4873;
    border-left:5px solid transparent;
    border-right:5px solid transparent;
  }
  .message-list li.me {
    text-align:right;
  }
  .message-list li.me .message:after {
    left:auto; right:10px;
  }
  .send {
    position:absolute; bottom:0; left:0; right:0;
  }
</style>
