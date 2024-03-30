const mongoose = require("mongoose");
/* The code is defining a Mongoose schema for a post. The schema specifies the structure and data types
of a post object in a MongoDB collection. */

const postSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  prompt: {
    type: String,
    trim: true,
    required: true,
  },
  analysis: {
    type: String,
    trim: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
