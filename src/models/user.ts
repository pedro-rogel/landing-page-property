import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  numberPhone: { type: String },
  email: { type: String },
});

const user = mongoose.model("user", userSchema);

export { user, userSchema };
