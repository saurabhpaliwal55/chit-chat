import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';

export const protect = asyncHandler(async (req,res,next)=>{
    let token = req.header("Authorization").split(" ")[1]
    if(!token){
        res.status(502).json({message:"No token"})
    }

        try {
            const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decodedToken?._id).select("-password");
            req.user = user;
            next(); 
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not Authorized, token failed")
        }
})

