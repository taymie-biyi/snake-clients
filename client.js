const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //.on method - to specify event name
  // nd a function that does something when that event happens
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server")
    conn.write("Name: TAY");
   
  })

  return conn;
};

module.exports = connect;