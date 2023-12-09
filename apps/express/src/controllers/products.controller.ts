import { ProductModel, RequestCustom, ResponseCustomModel } from '@am/models';
import { RequestHandler, RequestParamHandler } from 'express';

import Product from '../models/product.model';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// static files for test
// const productsPath = resolve(__dirname, 'assets/static-test/products.json');
// const products: ProductModel[] = JSON.parse(
//   readFileSync(productsPath, 'utf-8')
// );

// let productID: string;
// let product: ProductModel | undefined;

// export const checkProductId: RequestParamHandler = (
//   req,
//   res,
//   next,
//   value: any
// ) => {
//   productID = req.params.id;
//   product = products.find((o) => o.id === productID);

//   if (!productID || !product) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid Product ID',
//     });
//   }
//   next();
// };

export const addProduct: RequestHandler = async (
  req: RequestCustom,
  res: ResponseCustomModel<ProductModel>
) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      status: 'success',
      data: newProduct,
    });
  } catch (error: any) {
    res.status(error.statusCode).json({
      status: error.status,
      error: error,
      message: error.message,
      stack: error.stack,
    });
  }
};

export const deleteProduct: RequestHandler = async (
  req: RequestCustom,
  res: ResponseCustomModel<ProductModel>
) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error,
      message: 'fail to delete product',
    });
  }
};

export const getProductById: RequestHandler = (
  req: RequestCustom,
  res: ResponseCustomModel<ProductModel>
) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {},
  });
};

export const getAllProducts: RequestHandler = (
  req: RequestCustom,
  res: ResponseCustomModel<ProductModel[]>
) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: 0,
    data: [],
  });
};
