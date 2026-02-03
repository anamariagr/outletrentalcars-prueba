import { useState, useEffect } from 'react';
import { reservationUseCase } from '@/domain/useCases/ReservationUseCase';

interface RentalCalculationResult {
    days: number;
    totalPrice: number;
}


export function useRentalCalculation(
    pricePerDay: number | string | undefined,
    pickupDate: string,
    returnDate: string
): RentalCalculationResult {
    const [days, setDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (pickupDate && returnDate && pricePerDay !== undefined) {
            const price = typeof pricePerDay === 'string' ? parseFloat(pricePerDay) : pricePerDay;
            
            // Usa el Use Case para cálculos de negocio
            const rentalDays = reservationUseCase.calculateDays(pickupDate, returnDate);
            const total = reservationUseCase.calculateTotalPrice(price, rentalDays);

            setDays(rentalDays);
            setTotalPrice(total);
        }
    }, [pricePerDay, pickupDate, returnDate]);

    return { days, totalPrice };
}
