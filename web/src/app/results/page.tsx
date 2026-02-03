'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { fetchVehicles, selectVehicle, Vehicle } from '@/store/slices/vehiclesSlice';
import VehicleCard from '@/components/features/VehicleCard';
import { useRouter } from 'next/navigation';
import SearchForm from '@/components/features/SearchForm';

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
        <main className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-blue-900 pt-10 pb-24 px-6 text-center text-white">
                <h1 className="text-3xl font-bold">Resultados para {city || 'tu búsqueda'}</h1>
                {pickupDate && returnDate && (
                    <p className="text-blue-200 mt-2">{pickupDate} - {returnDate}</p>
                )}
            </div>

            <div className="px-4">
                {/* Re-use search form to allow modifying search */}
                <SearchForm />
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16">
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
                            <div key={vehicle.id} style={{ height: '450px' }}> {/* Fixed height container for consistency */}
                                <VehicleCard
                                    vehicle={vehicle}
                                    onSelect={handleSelectVehicle}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {!loading && !error && vehicles.length === 0 && (
                    <div className="text-center text-gray-500 py-10">
                        No se encontraron vehículos disponibles.
                    </div>
                )}
            </div>
        </main>
    );
}
