'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setSearchCriteria } from '@/store/slices/searchSlice';

export default function SearchForm() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [formData, setFormData] = useState({
        city: '',
        pickupDate: '',
        returnDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setSearchCriteria(formData));
        router.push('/results');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto -mt-16 relative z-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Ciudad de Recogida</label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        required
                    >
                        <option value="">Seleccionar ciudad</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Sevilla">Sevilla</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Fecha Recogida</label>
                    <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Fecha Devolución</label>
                    <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        className="p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
                >
                    Buscar Auto
                </button>
            </form>
        </div>
    );
}
