import User from "../models/User";
import { createToken } from "../services/auth";
import { checkPassword, hashPassword } from "../services/passwords";

export const SignIn = async (req,res,next) => {
    try {
        const { email , password } = req.body;
        let hashed = await User.findOne({email}).select('password');
        const user = await User.findOne({email});
        if(!user) return res.status(401).send({success:false,message:'Usuario y/o contraseña inválidos'});
        const { isValid } = await checkPassword(password,hashed.password);
        if(!isValid) return res.status(401).send({success:false,message:'Usuario y/o contraseña inválidos'});
        const token = createToken(user);
        return res.status(200).send({success:true,message:'Bienvenid@ de nuevo',id:user._id,token,role:user.role});
    } catch (error) {
        next(error);
    }
};

const addUser = async (req,res,next) => {
    try {
        let user = new User(req.body);
        user.password = await hashPassword(user.password);
        await user.save();
        return res.status(200).send({success:true,message:'Usuario agregado con éxito'});
    } catch (error) {
        next(error);
    }
}