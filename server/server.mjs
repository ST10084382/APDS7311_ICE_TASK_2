import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";

import https from "https";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.KEY;
const cert = process.env.CERT;

console.log(key + " KEY AND CERT " + cert);

const options = {
  key: fs.readFileSync(key), 
  cert: fs.readFileSync(cert),    
}

  import records from "./routes/record.mjs"; 

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

let server = https.createServer(options,app)

app.get('/',(req,res)=>{
  res.send('HTTPS in ExpressJS')
})

// start the Express server
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});