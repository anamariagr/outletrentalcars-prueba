"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setSearchCriteria } from "@/store/slices/searchSlice";


export default function SearchForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const search = useSelector((state: any) => state.search);

  const [formData, setFormData] = useState({
    city: search.city || "",
    pickupDate: search.pickupDate || "",
    returnDate: search.returnDate || "",
  });

  // Si el store cambia (por ejemplo, al volver de summary), actualiza el formulario
  useEffect(() => {
    setFormData({
      city: search.city || "",
      pickupDate: search.pickupDate || "",
      returnDate: search.returnDate || "",
    });
  }, [search.city, search.pickupDate, search.returnDate]);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSearchCriteria(formData));
    router.push("/results");
  };

  return (
    <div className="w-full rounded-2xl border border-blue-100/40 bg-white p-6 shadow-2xl">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Localidad de Recogida
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none"
              required
            >
              <option value="">Seleccionar ciudad</option>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Valencia">Valencia</option>
              <option value="Sevilla">Sevilla</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Recogida
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none"
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Devolución
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none"
              required
              min={formData.pickupDate || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex h-[52px] items-center justify-center rounded-xl px-6 text-sm font-bold text-white shadow-lg transition-colors"
          style={{ backgroundColor: 'lab(24 24.8 -64.36)' }}
        >
          Buscar
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
          Deseo regresar el auto en otra localidad
        </label>
        <span className="font-semibold text-blue-600">
          Rebajas hasta el 40% en USA
        </span>
      </div>
    </div>
  );
}
