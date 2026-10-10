import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

if (!process.env.MONGODB_URL) {
  throw new Error("MONGODB_URL environment variable is not defined");
}

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db();

export const auth = betterAuth({
  emailAndPassword: {    
        enabled: true
    },

  database: mongodbAdapter(db, {
    client,
  }),
});