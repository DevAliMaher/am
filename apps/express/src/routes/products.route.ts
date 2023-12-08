import {
  checkProductId,
  getAllProducts,
  getProductById,
} from '../controllers/products.controller';

import express from 'express';

const productsRouter = express.Router();

productsRouter.param('id', checkProductId);

productsRouter.route('/').get(getAllProducts);

productsRouter.route('/:id').get(getProductById);

export default productsRouter;
