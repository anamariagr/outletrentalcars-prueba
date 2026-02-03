'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { fetchVehicles, selectVehicle, Vehicle } from '@/store/slices/vehiclesSlice';
import VehicleCard from '@/components/features/VehicleCard';
import { useRouter } from 'next/navigation';
import SearchForm from '@/components/features/SearchForm';
import BackButton from '@/components/common/BackButton';

export default function ResultsPage() {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { list: vehicles, loading, error } = useSelector((state: RootState) => state.vehicles);
    const { city, pickupDate, returnDate } = useSelector((state: RootState) => state.search);

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    const handleSelectVehicle = (vehicle: Vehicle) => {
        dispatch(selectVehicle(vehicle));
        router.push('/summary');
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
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

            <section className="bg-[#0F1A4A] py-14">
                <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
                    {loading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-300"></div>
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
