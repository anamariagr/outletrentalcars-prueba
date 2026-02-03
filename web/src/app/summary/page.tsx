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

    const { days, totalPrice } = useRentalCalculation(
        selectedVehicle?.price,
        pickupDate,
        returnDate
    );

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
            <main className="min-h-screen bg-slate-950 text-white">
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B4D] via-[#1A2870] to-[#141A4B]" />
                    <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 xl:max-w-7xl">
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur">
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/20">
                                <svg className="h-10 w-10 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Reserva Confirmada!</h1>
                            <p className="text-blue-100 mb-8">
                                Tu reserva del <strong>{selectedVehicle.name}</strong> ha sido procesada correctamente.
                            </p>
                            <button
                                onClick={() => router.push('/')}
                                className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700"
                            >
                                Volver al Inicio
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B4D] via-[#1A2870] to-[#141A4B]" />
                <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:py-18 xl:max-w-7xl">
                    <div className="flex items-center gap-2">
                        <BackButton
                            to="/results"
                            label="Volver al buscador"
                            className="text-white/80 hover:text-white"
                        />
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">
                            Resumen
                        </p>
                    </div>
                    <h1 className="mt-4 text-3xl md:text-4xl font-black">
                        Resumen de tu Reserva
                    </h1>
                </div>
            </section>

            <section className="bg-[#0F1A4A] py-12">
                <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <VehicleDetailsCard vehicle={selectedVehicle} />
                            <RentalDetailsCard
                                city={city}
                                pickupDate={pickupDate}
                                returnDate={returnDate}
                            />
                        </div>

                        <div className="lg:col-span-1">
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
            </section>
        </main>
    );
}

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
        <div className="bg-white rounded-xl shadow-sm overflow-hidden text-gray-900">
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
        <div className="bg-white rounded-xl shadow-sm p-6 text-gray-900">
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
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6 text-gray-900">
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
                className="w-full text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors"
                style={{ backgroundColor: 'lab(24 24.8 -64.36)' }}
            >
                Confirmar Reserva
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
                Al hacer clic en "Confirmar Reserva", aceptas nuestros términos y condiciones.
            </p>
        </div>
    );
}
