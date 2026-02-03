import { useState, useEffect } from 'react';
import { calculateRentalDays, calculateTotalPrice } from '@/utils/dateUtils';

interface RentalCalculationResult {
    days: number;
    totalPrice: number;
}

/**
 * Custom hook to calculate rental days and total price
 * @param pricePerDay - Daily rental price
 * @param pickupDate - Pickup date string
 * @param returnDate - Return date string
 * @returns Calculated days and total price
 */
export function useRentalCalculation(
    pricePerDay: number | string | undefined,
    pickupDate: string,
    returnDate: string
): RentalCalculationResult {
    const [days, setDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (pickupDate && returnDate && pricePerDay !== undefined) {
            const rentalDays = calculateRentalDays(pickupDate, returnDate);
            const total = calculateTotalPrice(pricePerDay, rentalDays);

            setDays(rentalDays);
            setTotalPrice(total);
        }
    }, [pricePerDay, pickupDate, returnDate]);

    return { days, totalPrice };
}
