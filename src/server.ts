import net from 'net';

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

server.listen('/tmp/unix.sock');
