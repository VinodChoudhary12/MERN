import express from 'express';
import { getcatogery, addInBulk } from '../controller/catogery.controller.js';

const catRouter = express.Router();

catRouter.get('/', getcatogery);
catRouter.post('/', addInBulk);


export default catRouter;