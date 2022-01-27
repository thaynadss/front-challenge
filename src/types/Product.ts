export type DisplayCard = {
  id: number;
  img: string;
  title: string;
  price: number;
  discount: number;
  memberPrice: number;
  nonMemberPrice: number;
};

export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  Rating?: number;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommerlierComment: string;
};

export type CartItem = {
  id: number;
  image: string;
  name: string;
  country: string;
  price: number;
  quantity: number;
}