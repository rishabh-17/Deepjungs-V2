// Important modules import
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
// middleware import
const { AuthMiddleware } = require("./middleware");

// mongo db connection import
const connectDB = require("./db/connect.js");

// routes import
const { DalleRoutes, UserRoutes, PostRoutes, BlogRoutes } = require("./routes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes connection
app.use("/api/v1/auth", UserRoutes);
app.use("/api/v1/post", PostRoutes); // don't add authMiddleware here
app.use("/api/v1/dalle", DalleRoutes);
app.use("/api/v1/blog", BlogRoutes);

app.use("/", (req, res) => {
  console.log(req.url === "/");
  res.sendFile(
    path.join(__dirname, `v2/build/${req.url !== "/" ? req.url : "index.html"}`)
  );
});
// Global error handling
app.use("*", async (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

// server and mongodb connection
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(8080, () => console.log("Server started on port 8000"));
  } catch (error) {
    console.log(error);
  }
};
// app.timeout = 100000;
// server start
startServer();
