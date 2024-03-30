const mongoose = require("mongoose");
/* The code is defining a Mongoose schema for a user profile. */

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bio: {
    type: String,
    trim: true,
  },
  accountType: {
    type: String,
    enum: ["public", "private"],
    default: "public",
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  gender: {
    type: String,
    select: false,
  },
  photo: {
    type: Object,
    default:
      "https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
