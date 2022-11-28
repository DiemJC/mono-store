import { Router } from 'express';
import { getUsers } from '../../../controllers/users';
import { brand } from './brand';

export const priv = Router();

priv.use('/brand',brand);
priv.use('/user/list',getUsers);