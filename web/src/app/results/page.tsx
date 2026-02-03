
'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Hooks de Redux para estado global
import { RootState, AppDispatch } from '@/store/store'; // Tipos de Redux
import { fetchVehicles, selectVehicle, Vehicle } from '@/store/slices/vehiclesSlice'; // Acciones y thunks de vehículos
import VehicleCard from '@/components/features/VehicleCard'; // Componente: tarjeta individual de vehículo
import { useRouter } from 'next/navigation'; // Hook de navegación Next.js
import SearchForm from '@/components/features/SearchForm'; // Componente: formulario de búsqueda
import BackButton from '@/components/common/BackButton'; // Componente: botón para volver al inicio
<<<<<<< HEAD

import Modal from '@/components/common/Modal';

export default function ResultsPage() {
    const [showDateModal, setShowDateModal] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { list: vehicles, loading, error } = useSelector((state: RootState) => state.vehicles);
    const { city, pickupDate, returnDate } = useSelector((state: RootState) => state.search);

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    const handleSelectVehicle = (vehicle: Vehicle) => {
        if (!pickupDate || !returnDate) {
            setShowDateModal(true);
            return;
        }
        dispatch(selectVehicle(vehicle));
        router.push('/summary');
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Modal isOpen={showDateModal} onClose={() => setShowDateModal(false)} title={null}>
                <div className="text-center text-gray-700">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 text-center">Selecciona las fechas</h2>
                    <svg className="mx-auto mb-4 h-12 w-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mb-2 text-lg font-semibold text-center">Debes seleccionar una fecha de recogida y una de devolución antes de continuar.</p>
                    <button
                        onClick={() => setShowDateModal(false)}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
                    >
                        Entendido
                    </button>
                </div>
            </Modal>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B4D] via-[#1A2870] to-[#141A4B]" />
                <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:py-20 xl:max-w-7xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <BackButton
                                    to="/"
                                    label="Volver al inicio"
                                    className="text-white/80 hover:text-white"
                                />
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">
                                Resultados
                                </p>
                            </div>
                            <h1 className="mt-3 text-3xl md:text-4xl font-black">
                                Resultados para {city || 'tu búsqueda'}
                            </h1>
                            {pickupDate && returnDate && (
                                <p className="pt-[15px] text-[20px] text-blue-100">
                                    {pickupDate} - {returnDate}
                                </p>
                            )}
                        </div>
                        <div className="hidden md:flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Rebajas hasta el{' '}
                            <span className="rounded-full bg-emerald-400/20 px-2 py-1 font-bold text-emerald-300">
                                40%
                            </span>{' '}
                            en USA
                        </div>
                    </div>

                    <div className="mt-8">
                        <SearchForm />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#0F1A4A] to-[#3a0097] py-14">
                <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-300"></div>
                            <span className="text-blue-100 text-lg font-semibold">Cargando vehículos...</span>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-center">
                            {error}
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vehicles.map((vehicle) => (
                                <div key={vehicle.id} className="h-[450px]">
                                    <VehicleCard
                                        vehicle={vehicle}
                                        onSelect={handleSelectVehicle}
                                        disableSelect={!pickupDate || !returnDate}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {!loading && !error && vehicles.length === 0 && (
                        <div className="text-center text-blue-100 py-10">
                            No se encontraron vehículos disponibles.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
