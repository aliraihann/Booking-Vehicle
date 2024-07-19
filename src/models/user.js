import userSchema from "../schemas/user.js";
import mongoose from "mongoose";

const User = mongoose.model("user", userSchema);

// create a new user document
const createUser = async (name, role, email, hashPassword) => {
    try {
        const newUser = await User.create({
            name,
            role,
            email,
            password: hashPassword
        });
        console.log('new user has created');
        return newUser;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed create new user document on model: ${error.message}`);
        throw error;
    }
};

const findUserById = async (id, email) => {
    try {
        let user = await User.findById(id);
        return user;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed find user by id on model: ${error.message}`);
        throw error;
    }
};

const findUserByEmail = async (id, email) => {
    try {
        let user= await User.find({email: email});
        return user;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed find user by email on model: ${error.message}`);
        throw error;
    }
};

export {
    createUser,
    findUserById,
    findUserByEmail
};

