import {
  AddOrderBodyModel,
  OrderModel,
  RequestCustom,
  UpdateOrderQuantityBodyModel,
} from '@am/models';
import { NextFunction, Request, Response } from 'express';
import { readFileSync, writeFile } from 'fs';

import { resolve } from 'path';

// static files for test
const ordersPath = resolve(__dirname, 'assets/static-test/orders.json');
const orders: OrderModel[] = JSON.parse(readFileSync(ordersPath, 'utf-8'));

let userId: string;
let orderId: number;
let order: OrderModel | undefined;

export const checkUserId = (
  req: Request,
  res: Response,
  next: NextFunction
  // value: any,
) => {
  userId = req.headers.userId as string;
  if (!userId) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid User ID',
    });
  }
  next();
};

export const checkOrderId = (
  req: Request,
  res: Response,
  next: NextFunction,
  value: any
) => {
  orderId = +req.params.id;
  order = orders.find((o) => o.orderId === orderId);
  if (!orderId || !order) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Order ID',
    });
  }
  next();
};

export const checkAddProductBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: AddOrderBodyModel = req.body;
  if (
    !userId ||
    !body.products?.length ||
    (!body.paymentType && ['online', 'Cash'].includes(body.paymentType))
  ) {
    return res.status(404).json({
      status: 'fail',
      message: 'Wrong order body data',
    });
  }
  next();
};

export const checkPatchProductBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: UpdateOrderQuantityBodyModel = req.body;

  if (!userId || !body.orderId || !body.productId || !body.quantity) {
    return res.status(404).json({
      status: 'fail',
      message: 'Wrong Order BODY DATA',
    });
  }
  next();
};

export const getAllOrders = (req: RequestCustom, res: Response) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: orders.length,
    data: orders,
  });
};

export const getOrderById = (req: RequestCustom, res: Response) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: order,
  });
};

export const addOrder = (req: Request, res: Response) => {
  const body: AddOrderBodyModel = req.body;
  const orderId = orders[orders.length - 1].orderId + 1;
  const orderDate = new Date().toString();

  const newOrder: OrderModel = {
    orderId,
    orderDate,
    userId,
    ...body,
  };

  orders.push(newOrder);

  writeFile(ordersPath, JSON.stringify(orders), (error) => {
    res.status(201).json({
      status: 'success',
      data: newOrder,
    });
  });
};

export const updateProductQuantity = (req: Request, res: Response) => {
  const body: UpdateOrderQuantityBodyModel = req.body;

  const _order = orders.find((order) => order.orderId === body.orderId);

  const _orders = orders.map((order) => {
    if (order.orderId === _order?.orderId) return _order;
    return order;
  });

  writeFile(ordersPath, JSON.stringify(_orders), (error) => {
    res.status(201).json({
      status: 'success',
      data: _order,
    });
  });
};
