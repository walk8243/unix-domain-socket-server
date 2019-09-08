import net from 'net';
import fs from 'fs';

const socketFile = '/tmp/unix.sock';

const server = net.createServer((connection) => {
  console.log('connected.');
  connection.on('close', () => {
    console.log('disconnected.');
  });
  connection.on('data', (data) => {
    console.log(data.toString());
  });
  connection.on('error', (err) => {
    console.error(err.message);
  });
  connection.write('unix domain socket');
  connection.end();
});

try {
  fs.unlinkSync(socketFile);
} catch (error) {}

server.listen(socketFile);
