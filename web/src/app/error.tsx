"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <section className="bg-blue-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-100">
            Error inesperado
          </p>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
            Algo no salió como esperábamos.
          </h1>
          <p className="mt-4 text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            Intenta recargar la página o vuelve al inicio para continuar tu
            búsqueda.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-4xl px-6 -mt-10 pb-20">
        <section className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 shadow-lg">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => reset()}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Reintentar
            </button>
            <Link
              href="/"
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
            >
              Volver al inicio
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              Tiempo estimado: breve
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              Estado: monitoreando
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              Canal: soporte 24/7
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
