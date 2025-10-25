export interface Phone {
  id: string;
  name: string;
  brand: string;
  description?: string;
  price: number; // in COP
  image?: string;
}

export interface CartItem {
  phone: Phone;
  qty: number;
}
