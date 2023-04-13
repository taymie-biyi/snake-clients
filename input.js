
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
  if (key === 'w') {
    connection.write ('Move: up');
  }
  if (key === 'a') {
    connection.write ('Move: left');
  }
  if (key === 's') {
    connection.write ('Move: down');
  }
  if (key === 'd') {
    connection.write ('Move: right');
  }

  //send short chat messages
  if (key === 'i') {
    connection.write ('Say: Incoming!!')
  }
  if (key === 'k') {
    connection.write ("Say: I'm the ALL TIME CHAMPION")
  }
  if (key === 'l') {
    connection.write ("Say: You're gonna lose")
  }
  if (key === 'o') {
    connection.write ('Say: Leaving, Bye!!')
  }
  //to exit the game
  if (key === '\u0003'){
    process.exit();
  };
}

module.exports = setupInput;