import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <section className="bg-blue-900 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-100">
            Ruta perdida
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            La página que buscas no existe.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            No pudimos encontrar esa ruta. Regresa al inicio o continúa con la
            búsqueda de vehículos.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-5xl px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Error 404
              </p>
              <p className="mt-3 text-gray-600">
                Intentamos ubicar tu destino, pero no está en el mapa.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Volver al inicio
              </Link>
              <Link
                href="/results"
                className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
              >
                Ver autos
              </Link>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="h-2 rounded-full bg-blue-100" />
            <div className="h-2 rounded-full bg-blue-100" />
            <div className="h-2 rounded-full bg-blue-100" />
            <div className="h-2 rounded-full bg-gray-100" />
            <div className="h-2 rounded-full bg-gray-100" />
            <div className="h-2 rounded-full bg-gray-100" />
          </div>
        </div>
      </div>
    </main>
  );
}
