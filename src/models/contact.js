import { Schema, mongoose } from "mongoose";
const contactScheme = new Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  message: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactScheme);

export default Contact;
