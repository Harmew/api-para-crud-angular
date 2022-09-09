import moongose from "mongoose";
const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await moongose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });

  connection.isConnected = db.connections[0]._readyState;
}

export default dbConnect;
