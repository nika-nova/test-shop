export interface IProduct {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  description?: string;
  rating: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}
