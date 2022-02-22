export type CartItem = {
  id: number;
  image: string;
  name: string;
  country: string;
  price: number;
  quantity: number;
}

export type DisplayCard = Omit<CartItem, 'quantity'> & {
  discount: number;
  priceMember: number;
  priceNonMember: number;
};

export type Product = DisplayCard & {
  type: string;
  classification: string;
  size: string;
  Rating?: number;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
};