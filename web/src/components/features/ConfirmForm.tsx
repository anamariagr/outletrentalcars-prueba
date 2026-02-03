import React, { useState } from 'react';

interface ConfirmFormProps {
  vehicleName: string;
  onSubmit: (data: { name: string; email: string }) => void;
}

export default function ConfirmForm({ vehicleName, onSubmit }: ConfirmFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Confirmar reserva para {vehicleName}</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 rounded"
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
