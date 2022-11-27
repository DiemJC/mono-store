import { Router } from 'express';
import { getBrands , getBrandById } from '../../../controllers/brands';

export const brand = Router();

brand.get('/list',getBrands);
brand.get('/:id',getBrandById);