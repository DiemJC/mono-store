import { Router } from 'express';
import { brand } from './brand';

export const priv = Router();

priv.use('/brand',brand);