import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  email: {
    type: String,
    required: [true, "Your email is required"],
  },
  message: {
    type: String,
    required: [true, "Your message is required"],
  }
});

export default mongoose.models.Form ||
  mongoose.model("Form", FormSchema, "form");