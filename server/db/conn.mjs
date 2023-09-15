import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const connectionString = "mongodb+srv://admin:Q1w2e3r4@clusterice.wh1lh2j.mongodb.net/";//process.env.ATLAS_URI || "";


const connectionString = process.env.MONGO_CONN_STRING;
console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;