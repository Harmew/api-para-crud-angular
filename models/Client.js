import mongoose from "mongoose";

delete mongoose.connection.models["Client"];

const ClientSchema = new mongoose.Schema({
  id: { type: String, required: false },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  job: { type: String },
});

module.exports =
  mongoose.models.Client || mongoose.model("Client", ClientSchema);
