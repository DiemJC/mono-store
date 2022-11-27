import { loading } from '$lib/store';

export const load = async ({route}) => {
    loading.on();
    return {
        route
    }
}