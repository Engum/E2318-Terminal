const SerialPort = require('serialport');
const port = new SerialPort('/dev/serial0', { baudRate: 9600 });

port.on('data', function (data) {
  console.log('Data received:', data);
});

port.write('Hello World!');