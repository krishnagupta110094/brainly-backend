import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  type: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema);

export default Content;
