import { env } from '$env/dynamic/private';

const apidir = env.API_URL;

export const signIn = async ({email,password}) => {
    try {
        const response = await fetch(`${apidir}/apiv1/public/signin`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            mode:'cors',
            body:JSON.stringify({email,password})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};