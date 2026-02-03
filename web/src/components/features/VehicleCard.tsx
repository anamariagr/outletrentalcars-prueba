'use client';

import { Vehicle } from '@/store/slices/vehiclesSlice';
import Image from 'next/image';

interface VehicleCardProps {
    vehicle: Vehicle;
    onSelect: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
    return (
        <div className="bg-white text-black border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
            <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                {/* Placeholder for real image or fallback */}
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                        {vehicle.transmission}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{vehicle.description}</p>

                <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        {vehicle.seats} Asientos
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        {vehicle.transmission === 'Automatic' ? 'Automático' : 'Manual'}
                    </span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-blue-600">${vehicle.price}</span>
                        <span className="text-gray-500 text-sm"> / día</span>
                    </div>
                    <button
                        onClick={() => onSelect(vehicle)}
                        className="bg-gray-900 hover:bg-black text-white font-medium py-2 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        Seleccionar
                    </button>
                </div>
            </div>
        </div>
    );
}
