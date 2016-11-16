const net = require('net');
const formatDate = require('./format_date');

const args = process.argv.slice(2);

const server = net.createServer((socket) => {
  // console.log("(server) Client connected...");
  // socket.write();
  // socket.on('data', (data) => {
  //   console.log(data.toString());
  // });
  // socket.on('end', () => {
  //   console.log("(server) Client disconnected...");
  // });
  socket.end(formatDate(new Date()));
});
server.listen(args[1] ? args[1] : 3000, () => {
  // console.log("(server) Server is listening...");
});
