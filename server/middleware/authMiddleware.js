// import User from "../models/User.js"; 

// To check Authentication
// export const protect = async (req, res, next) => {
//     const {userId} = req.auth;
//     if(!userId){
//         res.json({success: false, message: "not authenticated"})
//     }
//     else{
//         const user = await User.findById(userId);
//         req.user = user;
//         next();
//     }
// }


import { getAuth } from "@clerk/express";
import User from "../models/User.js";

// To check Authentication
export const protect = async (req, res, next) => {
    const { userId } = getAuth(req);

    if (!userId) {
        return res.status(401).json({
            success: false,
            message: "not authenticated"
        });
    }

    const user = await User.findById(userId);

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "User not found"
        });
    }

    req.user = user;
    next();
};