import {createUser, findUserById, findUserByEmail} from "../models/user.js";
import bcrypt from 'bcrypt';
import { hash } from "bcrypt";
import generateToken from "../util/token.js";

const userRegistration = async (req, res) => {
    const { name, role, email, password } = req.body;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    try {
        // check email length
        if (password.length < 8){
            return res.status(400).json('Password must be at least 8 characters long');
        }
        // check email is a valid email pattern
        const emailValidation = emailPattern.test(email);
        if (!emailValidation) {
            return res.status(400).json('Email parameter is not in the correct format');
        }
        // check email availibility
        const checkEmailAvailibility = await findUserByEmail(email);
        if (checkEmailAvailibility !== undefined) {
            return res.status(400).json('Email has already been used');
        }
        // hash password for security
        const hashPassword = await hash(password, 10);
        //create user document
        const user = await createUser(name, role, email, hashPassword);
        res.status(201).json({
            id: user._id,
            name: user.name,
            role: user.role,
            email: user.email
        });
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed register new user on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

const userLogin = async (req, res) => {
    const {id, password} = req.body;
    try {
        const user = await findUserById(id);
        // check user by Id
        if (!user) {
            return res.status(400).json('Wrong user id');
        };
        // check user's password (on the database) with login's password
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            return res.status(400).json('Wrong password');
        };
        // generate token for authorization
        const token = await generateToken(id);
        res.status(201).json({
            message: `Log in success, welcome ${user.name}` ,
            token
            });
        } catch (error) {
            // log error to console for degugging purposes
            console.error(`Failed log in user on controller: ${error.message}`);
            res.status(500).json({message: "Internal server error"})
        }
    };

export {
    userRegistration,
    userLogin
};