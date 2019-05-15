let app = require("express")();

//let http = require("http").Server(app);

//let io = require("socket.io")(http);

//let moment = require('moment')
const moment = require('moment-timezone');


const fs = require('fs');

const server = require('https', 'http').createServer({
  key: fs.readFileSync('./agbchave.crt'),
  cert: fs.readFileSync('agbcertificado.crt')
});


let io = require("socket.io")(server);


console.log(io);


io.on("tlsClientError", error => {
  console.log(error);
})



io.on("connection", socket => {

  socket.removeAllListeners();

  // Log whenever a user connects


  // Log whenever a client disconnects from our websocket server

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });

  socket.on("connected", function (user) {
    console.log("user connected" + user);
  });

  socket.on('message', function (data) {

    io.emit('frame', JSON.stringify(data));
    console.log(data)
  });


  // socket.on('message', function (msg) {
  //   socket.emit('frame', msg);
  //   console.log(msg)
  // });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`


  socket.on('hora', (data) => {
    console.log(data)
    try {
      switch (data[0]['estado']) {
        case "AC":
        socket.emit('horaAgora', moment().tz("America/Rio_branco").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "AL":
        socket.emit('horaAgora', moment().tz("America/Maceio").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "AP":
        socket.emit('horaAgora', moment().tz("America/Belem").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "AM":
        socket.emit('horaAgora', moment().tz("America/Manaus").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "BA":
        socket.emit('horaAgora', moment().tz("America/Bahia").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "CE":
        socket.emit('horaAgora', moment().tz("America/Fortaleza").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "DF":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "ES":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "GO":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "MA":
        socket.emit('horaAgora', moment().tz("America/Fortaleza").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "MT":
        socket.emit('horaAgora', moment().tz("America/Cuiaba").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "MS":
        socket.emit('horaAgora', moment().tz("America/Campo_Grande").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "MG":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "PR":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "PB":
        socket.emit('horaAgora', moment().tz("America/Fortaleza").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "PA":
        socket.emit('horaAgora', moment().tz("America/Belem").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "PE":
        socket.emit('horaAgora', moment().tz("America/Recife").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "PI":
        socket.emit('horaAgora', moment().tz("America/Fortaleza").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "RJ":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "RN":
        socket.emit('horaAgora', moment().tz("America/Fortaleza").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "RS":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "RO":
        socket.emit('horaAgora', moment().tz("America/Porto_Velho").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "RR":
        socket.emit('horaAgora', moment().tz("America/Boa_Vista").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "SC":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "SE":
        socket.emit('horaAgora', moment().tz("America/Maceio").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "SP":
        socket.emit('horaAgora', moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case "TO":
        socket.emit('horaAgora', moment().tz("America/Araguaia").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case null:
        socket.emit('horaAgora', moment().tz("America/Campo_Grande").format("YYYY-MM-DD HH:mm:ss"));
        break;
        case '':
        socket.emit('horaAgora', moment().tz("America/Campo_Grande").format("YYYY-MM-DD HH:mm:ss"));
        break;
      }    
    } catch (error) {
      console.log(error)
    }
    
  });

});

// Initialize our websocket server on port 3000
server.listen(3000, () => {
  console.log("started on port 3000");
});
