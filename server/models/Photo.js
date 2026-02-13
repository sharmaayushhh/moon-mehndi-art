import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  imageUrl: String,
  category: {
    type: String,
    default: "Bridal"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Photo", photoSchema);
