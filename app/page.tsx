import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-6 py-24 px-6 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-extrabold">Demlur · Tienda de celulares</h1>
        <p className="max-w-lg text-center text-lg text-zinc-700">
          Bienvenido a Demlur. Una pequeña tienda de celulares de ejemplo con
          precios en pesos colombianos (COP). Navega el catálogo y añade
          productos al carrito.
        </p>
        <div className="flex gap-4">
          <Link href="/catalog" className="rounded bg-emerald-600 px-4 py-2 text-white">
            Ver catálogo
          </Link>
        </div>
      </main>
    </div>
  );
}
