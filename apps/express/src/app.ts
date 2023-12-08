import express, { Application, NextFunction, Response, json } from 'express';

import { RequestCustom } from '@am/models';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import ordersRouter from './routes/orders.route';
import productsRouter from './routes/products.route';
import { rateLimit } from 'express-rate-limit';
import { resolve } from 'path';
import { urlencoded } from 'body-parser';

// import hpp from 'hpp';

const app: Application = express();

// app.enable('trust proxy');
app.set('trust proxy', '127.0.0.1');

// app.set('view engine', 'pug');
// app.set('views', join(__dirname, 'views'));

//* 1) GLOBAL MIDDLEWARES
//#region a) Implement CORS
app.use(cors());
// Access-Control-Allow-Origin *
// api.am.com, front-end am.com
// app.use(cors({
//   origin: 'https://www.am.com'
// }))
app.options('*', cors());
//#endregion

//#region b) Serving static files
const assetsPath = resolve(__dirname, '../assets');
app.use(express.static(assetsPath));
//#endregion

//#region c) Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
//#endregion

//#region d) Stripe webhook, BEFORE body-parser, because stripe needs the body as stream

//#endregion

//#region e) Body parser, reading data from body into req.body
app.use(json({ limit: '10kb' }));
app.use(urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
//#endregion

//#region f) Data sanitization against NoSQL query injection
app.use(mongoSanitize());
//#endregion

//#region g) Data sanitization against XSS
// app.use(xss());
//#endregion

//#region h) Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//     ]
//   })
// );
//#endregion

//#region i) Allow compression
app.use(compression());

// ADD REQUEST TIME
app.use((req: RequestCustom, res: Response, next: NextFunction) => {
  const requestTime = new Date().toISOString();
  req.requestTime = requestTime;
  next();
});
//#endregion

//* 2) ROUTES
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/products', productsRouter);

//* Errors
// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// app.use(globalErrorHandler);

export default app;
