const {loginCheck} = require('../services/auth.service.js');

const basicAuthMiddleware = async (req,res,next)=>{
    if (req.headers.authorization){
        const base64Auth = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Auth, 'base64').toString('ascii');
        const [username,password] = credentials.split(':');
        const userFound = await loginCheck(username,password);
        if (userFound){
            req.id = userFound._id;
            return next();
        }
    }
    res.status(401).send('Unauthorized');
}

module.exports = {
    basicAuthMiddleware
}