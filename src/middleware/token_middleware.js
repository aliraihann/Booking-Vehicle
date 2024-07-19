import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

const generalKey = [process.env.ADM_KEY, process.env.DPT_KEY, process.env.FLT_KEY];

const tokenAuthentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.split(' ')[1];
        // check if header is containig token
        if (!token) return res.status(404).json('You are not authorized');
        let isAuthenticated = false;
        // check token authorization by role
        for (const key of generalKey) {
            jwt.verify(token, key, (err, user) => {
            if (!err) {
                req.authentication = true;
                isAuthenticated = true;
                return next();
            }
            });
            if (isAuthenticated) break;
        }
        if (!isAuthenticated) {
            return res.status(401).send('You are not authorized');
        };
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed authentication user on middleware: ${error.message}`);
        res.status(500).json({message: "Internal server error"});
}
};

const deptTokenAuthentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.split(' ')[1];
        // check if header is containig token
        if (!token) return res.status(404).json('You are not authorized');
        const decoded = await jwt.verify(token, generalKey[1]);
        next();
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed authentication user on middleware: ${error.message}`);
        res.status(500).json({message: "Internal server error"});
}
};

export {
    tokenAuthentication,
    deptTokenAuthentication
};