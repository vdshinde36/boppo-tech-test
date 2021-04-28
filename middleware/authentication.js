const { verify } = require('../auth/auth');

const isAuthenticated = async (req, res, next) => {
    if(getToken(request)){
        verify(token,(err, data) =>{
            if(err){
                res.status(401).json({error:'invalid Token'})
            }
            req.user = payload;
            next();
        });
    }else{
        res.status(401).json({error:'invalid Token'});
    }
}



/**
 * Extract Token from Authentication Bearer header
 * @param {*} request 
 * @returns 
 */
const getToken = function(request){
    let token = null;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    return null;
}

module.exports.isAuthenticated = isAuthenticated