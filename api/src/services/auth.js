import dayjs from 'dayjs';
import jwt from 'jwt-simple';

let secret = process.env.SECRET || 'MyAwesomeSecret12346579**2022'

export const createToken = (user) => {
    const payload = {
        iat:dayjs(),
        exp:dayjs().add(1,'hour'),
        sub:user._id,
        role:user.role
    };

    const token = jwt.encode(payload,secret);
    return token;
}