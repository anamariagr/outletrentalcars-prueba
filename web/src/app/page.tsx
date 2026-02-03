import SearchForm from '@/components/features/SearchForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Encuentra tu auto ideal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10">
            La mejor experiencia de alquiler al mejor precio. Sin sorpresas, sin complicaciones.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <div className="px-4">
        <SearchForm />
      </div>

      {/* Features / Benefits (Optional placeholder) */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 text-2xl font-bold">1</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Busca</h3>
          <p className="text-gray-600">Elige entre nuestra amplia flota de vehículos modernos.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 text-2xl font-bold">2</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Selecciona</h3>
          <p className="text-gray-600">Encuentra el auto que se adapta a tu estilo y presupuesto.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 text-2xl font-bold">3</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Disfruta</h3>
          <p className="text-gray-600">Recoge tu auto y comienza tu aventura sin preocupaciones.</p>
        </div>
      </section>
    </main>
  );
}
