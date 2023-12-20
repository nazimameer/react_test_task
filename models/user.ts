import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  mobileNumber: {
    type: Number,
    unique: true,
  },
  password: {
    type: String,
  },
  pronouns: {
    type: String,
  },
  fullName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  currentAddress: {
    type: String,
  },
  howLong: {
    type: String,
  },
  about: {
    type: String,
  },
  status: {
    type: String,
  },
  savings: {
    type: Number,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
