import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env"});

export function connect() {
  // Connecting to the database
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('--Connected to database');
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}