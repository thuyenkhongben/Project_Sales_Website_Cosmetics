import {Product} from '../product/Product';

export interface Order {
  orderId?: number;
  totalProductPrice: number;
  dateOder?: string;
  dateReceive?: string;
  addressUser: string;
  nameReceiver: string;
  product: Product[];
}
