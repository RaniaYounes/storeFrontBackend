import { Request, Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();
 const jwtSecret = process.env.JWT_SECRET as string

export const authToken = async (req: Request,res: Response,next:NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).send('Token not provided');
      return;
  }
  // verify token

     const payload= jwt.verify(token, jwtSecret);
    
     next()
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }
};
