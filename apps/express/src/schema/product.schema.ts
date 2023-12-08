import { Schema, model } from 'mongoose';

import { ProductModel } from '@am/models';

const productSchema = new Schema<ProductModel>({
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  availablePieces: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  productImg: { type: String },
});

const Product = model<ProductModel>('Product', productSchema);

export default Product;
