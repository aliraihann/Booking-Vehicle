import jwt from 'jsonwebtoken';
import {findUserById} from "../models/user.js";
import dotenv from 'dotenv';
dotenv.config();

const generateToken = async (id) => {
    try {
        const user = await findUserById(id);
        const userRoles = {
            admin: process.env.ADM_KEY,
            "department manager": process.env.DPT_KEY,
            "fleet manager": process.env.FLT_KEY,
        };
        // obtain by the user role
        const key = userRoles[user.role];
        const expiresIn = "1hr";
        // generate token
        const token = jwt.sign(
            {
            id: user._id, 
            name: user.name,
            email: user.email,
            },
            key,
            {expiresIn}
        );
        return token;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed generate new token on utility: ${error.message}`);
        res.status(500).json({message: "Internal server error"});
    }
};

export default generateToken;