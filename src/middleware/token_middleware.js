import jwt, { decode } from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

const generalKey = {
    admin: process.env.ADM_KEY,
    department: process.env.DPT_KEY,
    fleet: process.env.FLT_KEY,
  };

const tokenAuthentication = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];
    // check if header is containig token
    if (!token) return res.status(401).json('You are not authorized');
    try {
        let isAuthenticated = false;
        // check token authorization by role
        for (let i = 0; i < 3; i++) {
        jwt.verify(token, generalKey[i], (err, user) => {
            if (!err) {
              isAuthenticated = true;
              return next();
            }
          });
        }
        if (!isAuthenticated) {
            return res.status(401).send('You are not authorized');
        };
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized: token expired, please re-login" });
          } else {
            // Log the actual error for debugging
            console.error(`Failed authentication user on middleware: ${error.message}`);
            return res.status(500).json({ message: "Internal server error" });
          }
    }
};


const deptTokenAuthentication = async (req, res, next) => {
    const { authorization } = req.headers;
    
    const token = authorization && authorization.split(' ')[1];
    // check if header is containig token
    if (!token) return res.status(401).json({ message: 'You are not authorized' });
    try {
        jwt.verify(token, generalKey.department);
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized: token expired, please re-login" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'You are not authorized' });
        } else {
            // Log the actual error for debugging
            console.error(`Failed authentication user on middleware: ${error.message}`);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};

const fleetTokenAuthentication = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];
    // check if header is containig token
    if (!token) return res.status(401).json({ message: 'You are not authorized' });
    try {
        jwt.verify(token, generalKey.fleet);
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized: token expired, please re-login" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'You are not authorized' });
        } else {
            // Log the actual error for debugging
            console.error(`Failed authentication user on middleware: ${error.message}`);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};

export {
    tokenAuthentication,
    deptTokenAuthentication,
    fleetTokenAuthentication
};