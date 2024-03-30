const express = require("express");
const { BlogController } = require("../controllers");
const router = express.Router();
const { AuthMiddleware } = require("../middleware");
// const BlogController = require("../controllersr");

//GET ALL POSTS
router.get("/getblogs", BlogController.getAllBlog);
router.get("/getblog/:id", BlogController.getBlog);

//CREATE A POST
router.post("/create", BlogController.createBlog);

// router.post("/like", BlogController.likeBlog);

module.exports = router;
