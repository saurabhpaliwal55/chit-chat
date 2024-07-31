import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateToken = async(userId) =>{
    
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        return accessToken;
    } catch (error) {
        console.log("Somethins went wrong while generating token",error);
    }
}

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw Error("All fields are required");
  }


  const userExist = await User.findOne({ email });
  if (userExist) {
    throw Error("User already Exist");
  }

  const userNameExist = await User.findOne({ name });
  if (userNameExist) {
    throw Error("Username already exist");
  }
  const user = await User.create({ name, email, password });
 
  if(user){
    res.status(200)
    .json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:await generateToken(user._id),
    })
  }else{
    res.status(500),
    res.json({message:"user not registered"})
  }
});

const logInUser = asyncHandler(async(req,res)=>{
    const {name,password} = req.body;
    const user = await User.findOne({name})
    if(!user){
        throw Error("user not found");
    }
    console.log(user);

    const isPasswordValid = await user.isPasswordCorrect(password);
    if(!isPasswordValid){
        throw Error("Password mismatch")
    }
    return res
    .status(200)
    .json({mesassage:"Logged in succefully"});
})



export {registerUser,logInUser}