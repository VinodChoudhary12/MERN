
//Auth
import jwt from 'jsonwebtoken';
const auth = (req, res, next) => {
    try {
        // Get token from the Authorization header
        // const authHeader = req.headers.authorization;
        if (!req.headers.authorization) {
            return res.status(401).json({ error: "No token provided" });
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "invaild token" });
        }
        jwt.verify(token, "This is my Secret Key")
        next();
    } catch (err) {
        return res.status(401).json({ error: "Unauthroized access..." });
    }
};

export default auth;
