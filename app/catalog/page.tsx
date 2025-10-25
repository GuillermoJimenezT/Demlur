"use client";
import React, { useMemo, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import BrandFilter from "../components/BrandFilter";
import PHONES from "../../data/phones";

export default function CatalogPage() {
  const [brand, setBrand] = useState<string | null>(null);

  const brands = useMemo(() => Array.from(new Set(PHONES.map((p) => p.brand))), []);

  const list = useMemo(
    () => (brand ? PHONES.filter((p) => p.brand === brand) : PHONES),
    [brand]
  );

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Catálogo · Demlur</h1>
      <div className="mb-6">
        <BrandFilter brands={brands} value={brand} onChange={setBrand} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
    </main>
  );
}
