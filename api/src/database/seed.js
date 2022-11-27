import { connect } from 'mongoose';
import User from '../models/User';
import docs from './users.json';

(() => {
    const seed = async () => {
        console.log('Initializing aggregation');
        try {
            const users = await User.find();
            console.log(`Current users ${users}`)
            if(users.length === 0) {
                const response = await User.insertMany(docs);
                console.log(response);
                return;
            }else {
                console.log('No actions neededs');
                return;
            }
            return;
        } catch (error) {
            console.log(error);
            return error;
        }

    }
    connect('mongodb://127.0.0.1:27017/store', async err => {
        if(err) return console.log(`Error en bdd ${err}`);

        console.log('Connected to db')
        await seed();
        return;
    })
})()