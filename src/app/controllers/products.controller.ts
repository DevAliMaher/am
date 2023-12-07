import { NextFunction, Request, Response } from 'express';

import { ProductModel } from '../models/product.model';
import { RequestCustom } from '../models/request.model';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// static files for test
const productsPath = resolve(__dirname, '../../assets/static/products.json');
const products: ProductModel[] = JSON.parse(
  readFileSync(productsPath, 'utf-8'),
);

let productID: number;
let product: ProductModel | undefined;

export const checkProductId = (
  req: Request,
  res: Response,
  next: NextFunction,
  value: any,
) => {
  productID = +req.params.id;
  product = products.find((o) => o.productId === productID);

  if (!productID || !product) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Product ID',
    });
  }
  next();
};

export const getAllProducts = (req: RequestCustom, res: Response) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: products.length,
    data: products,
  });
};

export const getProductById = (req: RequestCustom, res: Response) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: product,
  });
};
