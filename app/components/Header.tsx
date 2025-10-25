"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="w-full border-b bg-white px-6 py-4 dark:bg-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          Demlur
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/catalog" className="text-sm text-zinc-700">
            Catálogo
          </Link>
          <Link href="#" className="relative rounded-md bg-zinc-100 px-3 py-1 text-sm">
            Carrito
            <span className="ml-2 inline-block rounded-full bg-rose-500 px-2 py-0.5 text-xs font-semibold text-white">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
