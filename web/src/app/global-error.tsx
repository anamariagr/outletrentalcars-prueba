"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="w-full rounded-2xl border border-gray-100 bg-white p-10 shadow-xl">
            <div className="bg-blue-900 text-white rounded-xl px-6 py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                Sistema en pausa
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                Se produjo un error general.
              </h1>
              <p className="mt-4 text-base md:text-lg text-blue-100">
                Reinicia la vista para intentar de nuevo. Si el problema
                continúa, vuelve más tarde.
              </p>
            </div>
            <button
              onClick={() => reset()}
              className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Reintentar
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
