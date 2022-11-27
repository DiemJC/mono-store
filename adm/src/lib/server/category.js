import { env } from '$env/dynamic/private'

const apidir = env.API_URL;

export const createCategory = async (body) => {
    try {
        const response = await fetch(`${apidir}/api/category/new`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            mode:'cors',
            body:JSON.stringify(body)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const updateCategory = async (args,id) => {
    try {
        const response = await fetch(`${apidir}/api/category/update/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            mode:'cors',
            body:JSON.stringify(args)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};