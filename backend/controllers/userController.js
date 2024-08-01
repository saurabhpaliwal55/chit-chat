import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    return accessToken;
  } catch (error) {
    console.log("Somethins went wrong while generating token", error);
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw Error("All fields are required");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(405);
    throw Error("User already Exist");
  }

  const userNameExist = await User.findOne({ name });
  if (userNameExist) {
    res.status(406);
    throw Error("Username already exist");
  }
  const user = await User.create({ name, email, password });
  const response = {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: await generateToken(user._id),
  };

  if (user) {
    res.status(200).json(response);
  } else {
    res.status(500), res.json({ message: "user not registered" });
  }
});

const logInUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (!user) {
    throw Error("user not found");
  }
  console.log(user);

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw Error("Password mismatch");
  }
  const response = {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: await generateToken(user._id),
  };
  return res.status(200).json(response);
});

const fetchAllUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({
    _id:{$ne: req.user._id}
  }).select("-password -isAdmin");
  res.send(users);
});

export { registerUser, logInUser, fetchAllUsers };
