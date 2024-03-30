const Post = require("../db/models/post.js");
const User = require("../db/models/User.js");
const cloudinary = require("cloudinary").v2;

/* The code `cloudinary.config({...})` is configuring the Cloudinary SDK with the necessary credentials
to access the Cloudinary service. */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/*This function is an asynchronous function that handles the logic for fetching all posts from the database. */
exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
};
/* The `exports.createPost` function is responsible for creating a new post in the database. */

exports.createPost = async (req, res) => {
  try {
    const { name, prompt, photo, analysis } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = new Post({
      name,
      prompt,
      photo: photoUrl.url,
      user: req.user._id,
      analysis: analysis
    });

    const createdPost = await newPost.save();
    const user = await User.findById(req.user._id);
    console.log(createdPost._id, req.user._id, user);
    user.posts.push(createdPost._id);
    await user.save();
    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findOne({ id: req.body._id });
    post.likes = post.likes + 1;
    post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};
