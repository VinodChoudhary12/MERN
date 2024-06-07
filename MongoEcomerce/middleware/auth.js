
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "invaild token" });
    }
    jwt.verify(token, "This is my secret key");
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json("Unhothorized Access");
  }
};

export default auth;

