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
    origin: "http://localhost:3000",
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

const REQF_RAVNKLOA = "de";
const REQF_VESTREKANALKAI = "ee";
const DCOMP_RAVNKLOA = "7a";
const DCOMP_VESTREKANALKAI = "ba";
const BCOMP_RAVNKLOA = "7b";
const BCOMP_VESTREKANALKAI = "bb";
const TEAID_GCMD_CLOSE = "73"
const TEBID_GCMD_CLOSE = "b3"

function Serial_SAM_RXD(SAMdataRX){
  SAMdataRX = Buffer.from(SAMdataRX, "utf-8").toString("hex");
  console.log(SAMdataRX);
  switch (SAMdataRX){
    case REQF_RAVNKLOA:
      //Unused for VK
      break;
    case REQF_VESTREKANALKAI:
      io.emit("button_data", true);
      break;
    case DCOMP_RAVNKLOA:
      io.emit("SAM_data",SAMdataRX);
      break;
    case DCOMP_VESTREKANALKAI:
      io.emit("SAM_data",SAMdataRX);      
      break;
    case BCOMP_RAVNKLOA:
      io.emit("SAM_data",SAMdataRX);
      break;
    case BCOMP_VESTREKANALKAI:
      io.emit("SAM_data",SAMdataRX);
      break;
    case TEAID_GCMD_CLOSE:
      //Unused for VK
      break;
    case TEBID_GCMD_CLOSE:
      io.emit("button_data", false);
      break;
    default:
      //Filter
      break;
  }
  
}

function Serial_SAM_Error(){
  console.log("An error has occured!")
  console.log("Check SAM's RXD/TXD line")
}
