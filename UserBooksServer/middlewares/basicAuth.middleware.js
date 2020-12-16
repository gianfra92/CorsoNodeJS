const User = require('../models/User.js');

const authControl = async (req,res,next)=>{
    if (req.headers.authorization){
        const base64Credentials = req.headers.authorization.split(' ')[1].trim();
        const credentials = Buffer.from(base64Credentials,'base64').toString('ascii');
        const [username,password] = credentials.split(':');
        const userFound = await User.findOne({username,password}).exec();
        if (userFound){
            req.id = userFound._id;
            return next();
        }
    }
    res.status(401).send('Unauthorized');
}

module.exports = {
    authControl
}