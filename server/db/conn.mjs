import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://admin:Q1w2e3r4@clusterice.wh1lh2j.mongodb.net/";//process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;