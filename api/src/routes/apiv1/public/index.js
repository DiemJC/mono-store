import { Router } from 'express';
import { SignIn } from '../../../controllers/users';

export const pub = Router();

pub.post('/signin',SignIn);
