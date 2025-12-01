import jwt, {} from "jsonwebtoken";
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ success: false, message: "Unauthorized: No token provided" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const secret = "123456789abcdef"; // use env variable in production
        if (!secret) {
            throw new Error("JWT_SECRET is not defined in .env");
        }
        const decoded = jwt.verify(token, secret);
        //@ts-ignore
        req.user = decoded; // Attach decoded token to request
        next();
    }
    catch (error) {
        return res
            .status(401)
            .json({ success: false, message: "Invalid or expired token" });
    }
};
//# sourceMappingURL=auth.middlewares.js.map