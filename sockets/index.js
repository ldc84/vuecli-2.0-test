const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('connected');
});

const messages = [];

io.on('connection', function(socket){

  socket.emit('chat.init-message', messages);

  socket.on('chat.message', (newMessage) => {
    messages.push(newMessage);
    io.emit('chat.read-message', newMessage);
  });
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
