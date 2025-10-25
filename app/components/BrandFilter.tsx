"use client";
import React from "react";

export default function BrandFilter({
  brands,
  value,
  onChange,
}: {
  brands: string[];
  value: string | null;
  onChange: (b: string | null) => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onChange(null)}
        className={`rounded px-3 py-1 text-sm ${value === null ? "bg-zinc-900 text-white" : "bg-zinc-100"}`}
      >
        Todos
      </button>
      {brands.map((b) => (
        <button
          key={b}
          onClick={() => onChange(b)}
          className={`rounded px-3 py-1 text-sm ${value === b ? "bg-zinc-900 text-white" : "bg-zinc-100"}`}
        >
          {b}
        </button>
      ))}
    </div>
  );
}
