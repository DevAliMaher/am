import app from './app/app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE?.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD as string,
) as string;

mongoose.connect(DB).then((conection) => {
  if (process.env.NODE_ENV === 'development') console.log('DB Connected...');
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
