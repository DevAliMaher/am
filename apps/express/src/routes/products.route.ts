import {
  addProduct,
  getAllProducts,
  getProductById,
} from '../controllers/products.controller';

import express from 'express';

const productsRouter = express.Router();

// productsRouter.param('id', checkProductId);

productsRouter.route('/:id').get(getProductById);

productsRouter.route('/').get(getAllProducts).post(addProduct);

export default productsRouter;
