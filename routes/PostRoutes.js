const express = require("express");
const { PostController } = require("../controllers");
const router = express.Router();
const { AuthMiddleware } = require("../middleware");

//GET ALL POSTS
router.get("/", PostController.getAllPost);

//CREATE A POST
router.post("/",AuthMiddleware,  PostController.createPost);

router.post("/like",AuthMiddleware, PostController.likePost);

module.exports = router;
