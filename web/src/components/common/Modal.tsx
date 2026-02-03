'use client';

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

/**
 * Reusable Modal component
 */
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
                {children}
            </div>
        </div>
    );
}
