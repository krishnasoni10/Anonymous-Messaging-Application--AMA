// models/message.js
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite in dev
export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
