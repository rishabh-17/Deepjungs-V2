const mongoose = require("mongoose");
/* The code is defining a Mongoose schema for a blog. The schema specifies the structure and data types
of a blog object in a MongoDB collection. */

const blogSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  blog: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
