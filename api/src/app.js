import express from 'express';
import cors from 'cors';
import { apiv1 } from './routes/apiv1';

export const app = express();

app.use(cors());
app.use('/apiv1',apiv1);