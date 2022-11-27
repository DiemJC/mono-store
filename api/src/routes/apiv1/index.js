import { Router } from 'express';
import { priv } from './private';
import { pub } from './public';

export const apiv1 = Router()

apiv1.use('/public',pub);
apiv1.use('/private',priv);