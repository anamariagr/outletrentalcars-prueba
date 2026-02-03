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
                className="p-2 rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                className="p-2 rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
            />
            <button
                type="submit"
                className="text-white py-2 px-4 rounded font-bold shadow-md transition-colors"
                style={{ backgroundColor: 'lab(24 24.8 -64.36)' }}
            >
                Confirmar
            </button>
        </form>
    );
}
