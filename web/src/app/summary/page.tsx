'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from 'react';
import Image from 'next/image';
import { useRentalCalculation } from '@/hooks/useRentalCalculation';
import Modal from '@/components/common/Modal';
import BackButton from '@/components/common/BackButton';
import ReservationForm from '@/components/features/ReservationForm';

export default function SummaryPage() {
    const router = useRouter();
    const { selectedVehicle } = useSelector((state: RootState) => state.vehicles);
    const { city, pickupDate, returnDate } = useSelector((state: RootState) => state.search);

    const [showForm, setShowForm] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    // Use custom hook for rental calculations (SRP)
    const { days, totalPrice } = useRentalCalculation(
        selectedVehicle?.price,
        pickupDate,
        returnDate
    );

    // Redirect if no vehicle selected
    useEffect(() => {
        if (!selectedVehicle) {
            router.push('/results');
        }
    }, [selectedVehicle, router]);

    const handleConfirmReservation = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const customerData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
        };

        console.log('Reservation confirmed:', {
            ...customerData,
            vehicle: selectedVehicle,
            totalPrice
        });

        setShowForm(false);
        setIsConfirmed(true);
    };

    if (!selectedVehicle) {
        return null;
    }

    if (isConfirmed) {
        return (
            <main className="min-h-screen bg-gray-50 py-20 px-4 flex justify-center items-center">
                <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Reserva Confirmada!</h1>
                    <p className="text-gray-600 mb-8">
                        Tu reserva del <strong>{selectedVehicle.name}</strong> ha sido procesada correctamente.
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Volver al Inicio
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-4">
                    <BackButton to="/results" label="Volver al buscador" />
                    <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 flex-1">
                        Resumen de tu Reserva
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Vehicle Details Section */}
                    <div className="md:col-span-2 space-y-6">
                        <VehicleDetailsCard vehicle={selectedVehicle} />
                        <RentalDetailsCard
                            city={city}
                            pickupDate={pickupDate}
                            returnDate={returnDate}
                        />
                    </div>

                    {/* Price Summary Section */}
                    <div className="md:col-span-1">
                        <PriceSummaryCard
                            pricePerDay={Number(selectedVehicle.price)}
                            days={days}
                            totalPrice={totalPrice}
                            onConfirm={() => setShowForm(true)}
                        />
                    </div>
                </div>

                <Modal
                    isOpen={showForm}
                    onClose={() => setShowForm(false)}
                    title="Completa tu reserva"
                >
                    <ReservationForm onSubmit={handleConfirmReservation} />
                </Modal>
            </div>
        </main>
    );
}

// Extracted sub-components for better organization (SRP)

interface VehicleDetailsCardProps {
    vehicle: {
        image: string;
        name: string;
        description: string;
        transmission: string;
        seats: number;
    };
}

function VehicleDetailsCard({ vehicle }: VehicleDetailsCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-64 w-full bg-gray-100">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h2>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{vehicle.transmission}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{vehicle.seats} Asientos</span>
                </div>
            </div>
        </div>
    );
}

interface RentalDetailsCardProps {
    city: string;
    pickupDate: string;
    returnDate: string;
}

function RentalDetailsCard({ city, pickupDate, returnDate }: RentalDetailsCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
                Detalles de Recogida y Devolución
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Recogida</p>
                    <p className="text-gray-900 font-medium">{city}</p>
                    <p className="text-gray-600">{pickupDate}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Devolución</p>
                    <p className="text-gray-900 font-medium">{city}</p>
                    <p className="text-gray-600">{returnDate}</p>
                </div>
            </div>
        </div>
    );
}

interface PriceSummaryCardProps {
    pricePerDay: number;
    days: number;
    totalPrice: number;
    onConfirm: () => void;
}

function PriceSummaryCard({ pricePerDay, days, totalPrice, onConfirm }: PriceSummaryCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 sticky top-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Desglose de Precio</h3>

            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                    <span>Precio por día</span>
                    <span>${pricePerDay.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Duración</span>
                    <span>{days} días</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={onConfirm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors"
            >
                Confirmar Reserva
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
                Al hacer clic en "Confirmar Reserva", aceptas nuestros términos y condiciones.
            </p>
        </div>
    );
}
