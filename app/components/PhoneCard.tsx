"use client";
import React from "react";
import type { Phone } from "../../types";
import { useCart } from "../../context/CartContext";

function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PhoneCard({ phone }: { phone: Phone }) {
  const { addToCart } = useCart();

  return (
    <article className="flex w-full max-w-md flex-col gap-3 rounded-lg border p-4">
      <div className="h-12 w-full">
        <div className="text-sm font-medium text-zinc-500">{phone.brand}</div>
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold">{phone.name}</h3>
        <p className="text-sm text-zinc-600">{phone.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-base font-bold text-foreground">{formatCOP(phone.price)}</div>
          <button
            onClick={() => addToCart(phone)}
            className="rounded bg-emerald-600 px-3 py-1 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
