import {
  addOrder,
  checkAddProductBody,
  checkOrderId,
  getAllOrders,
  getOrderById,
  updateProductQuantity,
} from '../controllers/orders.controller';

import express from 'express';

const ordersRouter = express.Router();

// ordersRouter.head('', checkUserId);
ordersRouter.param('id', checkOrderId);

ordersRouter.route('/').get(getAllOrders).post(checkAddProductBody, addOrder);

ordersRouter.route('/:id').get(getOrderById).patch(updateProductQuantity);

export default ordersRouter;
