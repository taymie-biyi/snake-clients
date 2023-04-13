const { moveKeys, messages } = require("./constants");

let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
// setup WASD movement
  if (moveKeys[key]) {
    connection.write (moveKeys[key])
  };
  
  //send short chat messages
  if (messages[key]){
    connection.write (messages[key])
  }
  
  //to exit the game
  if (key === '\u0003'){
    process.exit();
  };
}

module.exports = setupInput;