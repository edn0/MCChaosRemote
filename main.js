const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require("fs");




function write_stuff(stuff_to_write) {

  let date = new Date;
  let timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    stuff_to_write = {"command":stuff_to_write,"id":`${timestamp}`}
    stuff_to_write = JSON.stringify(stuff_to_write);

    fs.writeFile("T:/spigotmc/scriptcraft/plugins/poot.json", stuff_to_write, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`The file was saved with ${timestamp}`);
    }); 
}



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      write_stuff(msg);
    });
  });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
  });



server.listen(3000, () => {
  console.log('listening on *:3000');
});


