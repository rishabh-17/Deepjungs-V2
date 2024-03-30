const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* The `exports.signup` function is a controller function that handles the logic for user signup. */
exports.signup = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userCheck = await User.findOne({ email: email });
    if (userCheck) {
      res.json({ msg: "email already exist", signup: false });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      const user = new User({
        name: name,
        email: email,
        password: hashed,
      });
      await user.save();
      res.json({ msg: "signup Successful", signup: true, user });
    }
  } catch (error) {
    console.log(error);
  }
};

/* The `exports.login` function is a controller function that handles the logic for user login. */
exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });

  console.log(user);
  if (user?.email.length) {
    bcrypt.compare(password,user.password).then(()=> {
      res.json({
        msg: "login successful",
        login: true,
        user,
        token: getAccessToken(user.id, user.name, user.isPremiumUser),
      })}).catch(err=>{
          res.json({ msg: "Enter correct password", login: false, err });     
      })
  } else {
    res.json({ msg: "user not found", login: false });
  }
  } catch (error) {
    console.log('login error', error);
  }
  
};

/**
 * The function `getAccessToken` generates a JSON Web Token (JWT) using the provided user ID, name, and
 * premium user status.
 * @param id - The user's ID, which is typically a unique identifier for each user in the system. It
 * could be a number, string, or any other data type that uniquely identifies the user.
 * @param name - The name parameter is a string that represents the name of the user.
 * @param isPremiumUser - A boolean value indicating whether the user is a premium user or not.
 * @returns a JSON Web Token (JWT) that contains the user's ID, name, and premium user status.
 */
function getAccessToken(id, name, isPremiumUser) {
  return jwt.sign(
    { _id: id, name: name, isPremiumUser: isPremiumUser },
    "secretKey"
  );
}
