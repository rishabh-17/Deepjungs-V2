const Blog = require("../db/models/Blog.js");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({}).select(["-blog"]);
    res.status(200).json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching blogs failed, please try again",
    });
  }
};
/* The `exports.createBlog` function is responsible for creating a new blog in the database. */

exports.createBlog = async (req, res) => {
  try {
    const { blog, thumbnail, author, title } = req.body;
    // console.log(req.body.thumbnail.data_url);
    const thumbnailUrl = await cloudinary.uploader.upload(thumbnail.data_url);
    console.log(thumbnailUrl);
    const newBlog = new Blog({
      blog: blog,
      thumbnail: thumbnailUrl.url,
      author,
      title,
    });

    await newBlog.save();
    res.status(201).json({ success: true, data: newBlog });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to create a blog, please try again",
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    res.json(blog);
  } catch (error) {
    console.log(error);
    res.json({ err: true });
  }
};

exports.likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ id: req.body._id });
    blog.likes = blog.likes + 1;
    blog.save();
    res.json(blog);
  } catch (error) {
    console.log(error);
  }
};
