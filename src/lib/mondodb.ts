import mongoose from "mongoose";

async function connectDataBase() {
  const MONGODB = process.env.DB_CONNECTION_STRING;
  if (!MONGODB) throw Error("MONGODB não definida");
  mongoose.connect(MONGODB);
  return mongoose.connection;
}

export default connectDataBase