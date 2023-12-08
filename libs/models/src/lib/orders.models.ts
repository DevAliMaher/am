export type PaymentType = 'online' | 'Cash';

export interface OrderProductModel {
  productId: number;
  quantity: number;
}

export interface UpdateOrderQuantityBodyModel extends OrderProductModel {
  orderId: number;
}

export interface AddOrderBodyModel {
  products: OrderProductModel[];
  paymentType: PaymentType;
}

export interface OrderModel extends AddOrderBodyModel {
  orderId: number;
  orderDate: string;
  userId: string;
}
