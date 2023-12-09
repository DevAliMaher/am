import { Schema, model } from 'mongoose';

import { ProductModel } from '@am/models';

const productSchema = new Schema<ProductModel>({
  productName: { type: String, required: true, unique: true },
  productPrice: {
    type: Number,
    required: [true, 'A Product Must have a price'],
    trim: true,
  },
  availablePieces: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
  productImg: { type: String },
});

const Product = model<ProductModel>('Product', productSchema);

export default Product;
