import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1] as string;

  try {
    const secret = process.env.JWT_SECRET; // use env variable in production
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in .env");
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    // console.log("decoded", decoded);
    //@ts-ignore
    req.user = decoded; // Attach decoded token to request
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
