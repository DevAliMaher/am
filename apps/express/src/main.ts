import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

process.on('uncaughtException', (error) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(error.name, error.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE?.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD as string
) as string;

mongoose.connect(DB).then((conection) => {
  if (process.env.NODE_ENV === 'development') console.log('DB Connected...');
});

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (error: Error) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
