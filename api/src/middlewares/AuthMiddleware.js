import jwt from 'jwt-simple';

let secret = process.env.SECRET || 'MyAwesomeSecret12346579**2022'

export const decodeToken = (token) => {
    const payload = jwt.decode(token,secret);
    return payload;
}

export const AuthMiddleware = (req,res,next) => {
    if(!req.headers.authorization) return res.status(401).send({success:false,message:'Sin cabeceras de autenticación'});
    const token = req.headers.authorization.split(' ')[1];
    const { sub , role } = decodeToken(token);
    
    req.user = sub;
    req.role = role;
}