import Image from "next/image";
import SearchForm from "@/components/features/SearchForm";

const destinations = [
  {
    name: "Miami",
    subtitle: "Playas y city vibes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" // Miami
  },
  {
    name: "Orlando",
    subtitle: "Parques y aventuras",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" // Orlando
  },
  {
    name: "Los Ángeles",
    subtitle: "Ruta costera",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" // Los Ángeles
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="bg-white text-gray-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
         <div className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
           </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B4D] via-[#1A2870] to-[#141A4B]" />
        

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

      <section className="bg-white py-16 text-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Alquila carros en los destinos más populares de USA
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-emerald-400" />
            </div>
            <p className="max-w-xl text-sm text-gray-700">
              Aprovecha nuestras ofertas especiales y ahorra en tu alquiler de
              auto.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {destinations.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl bg-white p-4 shadow-lg transition hover:bg-gray-50"
              >
                <div className="h-40 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
