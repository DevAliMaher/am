import express, { Application, NextFunction, Response } from 'express';

import { RequestCustom } from './models/request.model';
import morgan from 'morgan';
import ordersRouter from './routes/orders.route';
import productsRouter from './routes/products.route';
import { resolve } from 'path';

const app: Application = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

const assetsPath = resolve(__dirname, '../assets');
app.use(express.static(assetsPath));

// TEST
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });
}

// ADD REQUEST TIME
app.use((req: RequestCustom, res: Response, next: NextFunction) => {
  const requestTime = new Date().toISOString();
  req.requestTime = requestTime;
  next();
});

// 3) ROUTES
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/products', productsRouter);

export default app;
