const mongoose = require("mongoose");

/**
 * The `connectDB` function connects to a MongoDB database using the provided URL.
 */
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
