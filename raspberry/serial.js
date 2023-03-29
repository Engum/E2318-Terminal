const {SerialPort,ReadlineParser} = require("serialport");

console.log("Starting serial on RPi...");
console.log("initializing...");
const path_RPi = '/dev/tty';
const SAM_path = path_RPi + 'AMA0';
const IO_path = path_RPi + 'S0';

const baud = 115200;

console.log(IO_path);
const from_SAM = new SerialPort({
path: SAM_path,
baudRate: baud,
});

/*
const from_IO = new SerialPort({
path: IO_path,
baudRate: baud,
});
*/

const parser = new ReadlineParser() 
from_SAM.pipe(parser);

parser.on('data',DataSAM);
from_SAM.on('error',OnError);
from_SAM.on('open',OnOpen);


function OnOpen(){
	console.log("The port is open on: "+SAM_path)
}
function DataSAM(dataRX){
	console.log("Data recieved:"+dataRX);
}

function OnError(){
	console.log("An error has occured!")
}




