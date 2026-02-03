import Image from "next/image";
import SearchForm from "@/components/features/SearchForm";

const destinations = [
  { name: "Miami", subtitle: "Playas y city vibes" },
  { name: "Orlando", subtitle: "Parques y aventuras" },
  { name: "Los Ángeles", subtitle: "Ruta costera" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="bg-white text-gray-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-gray-900">
              outlet
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              by Miles Car Rental
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              COP
            </span>
            <span>Español</span>
            <span className="h-8 w-8 rounded-full bg-gray-100" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B4D] via-[#1A2870] to-[#141A4B]" />
        <div className="absolute inset-y-0 right-0 hidden w-[48%] xl:w-[52%] lg:block pointer-events-none">
          <Image
            src="/hero-car.svg"
            alt="Auto en carretera"
            fill
            priority
            className="object-cover object-right"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-black leading-tight md:text-5xl">
                OFERTAS DE ALQUILER DE
                <span className="block">AUTOS EN USA</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-blue-100">
                ¡Aprovecha las mejores ofertas en renta de autos! Obtén un{" "}
                <span className="font-semibold text-emerald-300">
                  40% de descuento
                </span>{" "}
                ahora mismo.
              </p>
            </div>
            <div className="hidden items-end justify-end lg:flex">
              <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Rebajas hasta el{" "}
                <span className="rounded-full bg-emerald-400/20 px-2 py-1 font-bold text-emerald-300">
                  40%
                </span>{" "}
                en USA
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
              Busca aquí
            </p>
            <div className="mt-4">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F1A4A] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Alquila carros en los destinos más populares de USA
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-emerald-400" />
            </div>
            <p className="max-w-xl text-sm text-blue-100">
              Aprovecha nuestras ofertas especiales y ahorra en tu alquiler de
              auto.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {destinations.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl bg-white/5 p-4 shadow-lg transition hover:bg-white/10"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500/40 to-indigo-500/20" />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-blue-100">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
