const { SerialPort } = require('serialport');
const { ByteLengthParser } = require('@serialport/parser-byte-length');
const { express } = require('express');


const app = express();

app.post("/post", (req,res) => {
	console.log("Connected")
	res.redirect("/");
});

const port = process.env.port || 3001;

app.listen(port, console.log("Server started on ${port}"));

console.log("Starting serial on RPi...");
console.log("initializing...");

const path_RPi = '/dev/tty';
const SAM_path = path_RPi + 'AMA0';
const baud = 115200;
const datasize = 1; // Define size of each packet according to the PetterPetterAS lora communication protocol system schematic.

const Serial_SAM = new SerialPort({
path: SAM_path,
baudRate: baud,
});

const SAM_parser = new ByteLengthParser({length:datasize}) 
Serial_SAM.pipe(SAM_parser);

SAM_parser.on('data',Serial_SAM_RXD);
Serial_SAM.on('error',Serial_SAM_Error);
Serial_SAM.on('open',Serial_SAM_Open);


function Serial_SAM_Open(){
	console.log("The port for SAM is open on: "+SAM_path)
}
function Serial_SAM_RXD(SAMdataRX){
	console.log("Data recieved from SAM:"+SAMdataRX);
}

function Serial_SAM_Error(){
	console.log("An error has occured!")
	console.log("Check SAM's RXD/TXD line")
}






