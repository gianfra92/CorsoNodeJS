const {JWTKEY} = require('../config/keys.js');
const jwt = require('jsonwebtoken');

const user = {
    id:1,
    username: "mario",
    password: "1234"
};

const login = (username,password)=>{
    if (username === user.username && password === user.password){
        const token = jwt.sign({id:user.id,scopes:'user'},JWTKEY,{expiresIn:'1h'});
        return {    access_token:token,
                    id:user.id,
                    scopes:'user'
                }
    } else 
        throw {message:'Autentication failed', code:401};
}

module.exports = {
    login
}