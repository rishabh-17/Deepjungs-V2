const express = require("express");

const router = express.Router();

const { DalleController } = require("../controllers");

router.post("/", DalleController.genImage);

router.post("/dream", DalleController.genDream);

router.post("/chat", DalleController.dreamChat);

module.exports = router;
