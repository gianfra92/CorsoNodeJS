const { JWTKEY } = require('../config/keys.js');
const jwt = require('jsonwebtoken');

//Permissions contiene le autorizzazioni necessarie per accedere
const jwtPermission = (...permissions)=>{
    return (req, res, next) => {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1].trim();
            try {
                const decoded = jwt.verify(token, JWTKEY);
                if (!permissions.includes(decoded.scopes))  throw new Error();  //L'utente non ha le autorizzazioni specifiche
                next();
            } catch (error) {
                return res.status(401).send('Error: not authorized');
            }
        } else
            return res.status(401).send('Error: no token found');
    }
}

module.exports = jwtPermission;