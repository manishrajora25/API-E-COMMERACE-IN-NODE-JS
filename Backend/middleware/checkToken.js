import jwt from "jsonwebtoken";
import 'dotenv/config';
// import admin from "../models/adminModel.js";


export function checkAdmin(req, res, next) {
    const token = req.cookies.userToken;

    if (!token ) return res.status(401).send({ message: "No Token Found" });
    try {

        const decoded = jwt.verify(token, process.env.jWT_SECRET);

        req.user = decoded.id;

        next();
    }
    catch (error) {
        return res.status(402).json({ message: "Invalid or expired token" });
    }
}

export default checkAdmin;