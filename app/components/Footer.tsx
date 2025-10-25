import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white px-6 py-6 text-center text-sm text-zinc-600 dark:bg-black">
      <div className="mx-auto max-w-5xl">© {new Date().getFullYear()} Demlur · Venta de celulares · Precios en COP</div>
    </footer>
  );
}
