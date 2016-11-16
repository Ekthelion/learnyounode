const net = require('net');

var args = process.argv.slice(2);

const client = net.createConnection(Number(args[0] ? args[0] : 3000), () => {
  console.log("(client) Client connected to the server...");
  client.write("(client) Client says hi...");
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log("(client) Client disconnected from the server...");
});
client.on('error', (error) => {
  console.error(error);
});
