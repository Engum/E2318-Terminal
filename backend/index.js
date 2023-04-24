const { SerialPort } = require('serialport');
const { ByteLengthParser } = require('@serialport/parser-byte-length');

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

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

const io = new Server(server, {
  cors: {
    origin: "http://192.168.137.76:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);  

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log("Server is running!");
});

function Serial_SAM_Open(){
  console.log("The port for SAM is open on: "+SAM_path)
}

const REQF_RAVNKLOA = "0";
const REQF_VESTREKANALKAI = "1";
const DCOMP_RAVNKLOA = "2";
const DCOMP_VESTREKANALKAI = "3";
const BCOMP_RAVNKLOA = "4";
const BCOMP_VESTREKANALKAI = "5";


function Serial_SAM_RXD(SAMdataRX){
  console.log("Data recieved from SAM:"+SAMdataRX);
  SAMdataRX = SAMdataRX + "";
  //io.emit("SAM_data",SAMdataRX);
  //console.log(typeof SAMdataRX)
  switch (SAMdataRX){
    case REQF_RAVNKLOA:
      io.emit("SAM_data",SAMdataRX);
      io.emit("button_data", true);//parvis 1 RK
      break;
    case REQF_VESTREKANALKAI:
      io.emit("SAM_data",SAMdataRX);
      //io.emit("button_data", SAMdataRX);//parvis 2 VK
      break;
    case DCOMP_RAVNKLOA:
      io.emit("SAM_data",SAMdataRX);
      io.emit("button_data", false);//parvis 1
      break;
    case DCOMP_VESTREKANALKAI:
      io.emit("SAM_data",SAMdataRX);
      //io.emit("button_data", SAMdataRX);//parvis 2
      break;
    case BCOMP_RAVNKLOA:
      io.emit("SAM_data",SAMdataRX);
      break;
    case BCOMP_VESTREKANALKAI:
      io.emit("SAM_data",SAMdataRX);
      break;
    default:
      //console.log("Trash");
      //io.emit("SAM_data","No data");
      break;
  }
  
}

function Serial_SAM_Error(){
  console.log("An error has occured!")
  console.log("Check SAM's RXD/TXD line")
}
