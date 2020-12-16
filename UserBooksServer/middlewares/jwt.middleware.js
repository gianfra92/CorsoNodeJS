const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/keys.js');

const accessLevel = (...permissions)=>{
    return (req, res, next) => {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const verifiedToken = jwt.verify(token,jwtKey);
                req.id = verifiedToken.id;
                if (permissions.includes(verifiedToken.scopes))
                    return next();
            } catch (error) {
                res.status(401).send('Error invalid Token');
            }
        }
            res.status(401).send('Unauthorized');
    }
}

module.exports = accessLevel;