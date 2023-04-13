const net = require("net");

const { IP, PORT, name } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
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
    conn.write("Name: " + name);
   
  })

  return conn;
};

module.exports = connect;