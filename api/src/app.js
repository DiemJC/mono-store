import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { apiv1 } from './routes/apiv1';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/apiv1',apiv1);