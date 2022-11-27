import { Router } from 'express';
import { SignIn } from '../../../controllers/users';
import { brand } from './brand';

export const pub = Router();

pub.post('/signin',SignIn);
pub.use('/brand',brand);