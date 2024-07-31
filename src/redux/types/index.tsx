export type TProduct = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: "Hanging" | "Indoor" | "Low" | "Money" | "Flowering";
  availability: "In stock" | "Out of stock";
  stock: number;
  quantity: number;
  image: string;
  length: number;
};

export type TOrder = {
  _id: string;
  name: string;
  phone: string;
  city: string;
  email: string;
  deliveryAddress: string;
  note: string;
  items: number;
  totalPrice: number;
};
