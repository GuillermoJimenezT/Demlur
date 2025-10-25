"use client";
import React, { createContext, useContext, useState } from "react";
import type { CartItem, Phone } from "../types";

interface CartContextValue {
  items: CartItem[];
  addToCart: (phone: Phone, qty?: number) => void;
  removeFromCart: (phoneId: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (phone: Phone, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((c) => c.phone.id === phone.id);
      if (found) {
        return cur.map((c) =>
          c.phone.id === phone.id ? { ...c, qty: c.qty + qty } : c
        );
      }
      return [...cur, { phone, qty }];
    });
  };

  const removeFromCart = (phoneId: string) => {
    setItems((cur) => cur.filter((c) => c.phone.id !== phoneId));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((s, it) => s + it.phone.price * it.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
