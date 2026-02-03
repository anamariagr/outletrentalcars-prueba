'use client';

import { FormEvent } from 'react';

interface ReservationFormProps {
    onSubmit: (e: FormEvent) => void;
}

/**
 * Simple reservation form component
 */
export default function ReservationForm({ onSubmit }: ReservationFormProps) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                className="border p-2 rounded text-gray-900 placeholder-gray-500"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 rounded text-gray-900 placeholder-gray-500"
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                className="border p-2 rounded text-gray-900 placeholder-gray-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
                Confirmar
            </button>
        </form>
    );
}
