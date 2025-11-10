import jwt from "jsonwebtoken";

const authMiddleware = (req,res,next)=>{

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message:"Token is not available."})
    }

    try{
        const decoded = jwt.verify(token, "secret_key");
        req.user = decoded;
        next();

    }

    catch(error){
        return res.status(401).json({ message: "Invalid Token" });
    }



}

module.exports = {authMiddleware}