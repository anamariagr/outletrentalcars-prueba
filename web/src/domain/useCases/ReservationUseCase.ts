// Encapsula la lógica de negocio para reservas
import { Reservation, CustomerData, ReservationDetails } from '@/domain/entities/Reservation';
import { Vehicle } from '@/domain/entities/Vehicle';

export class ReservationUseCase {
    /**
     * Calcula el precio total de una reserva
     */
    calculateTotalPrice(pricePerDay: number, days: number): number {
        if (days <= 0 || pricePerDay <= 0) {
            return 0;
        }
        return pricePerDay * days;
    }

    /**
     * Calcula los días entre dos fechas
     */
    calculateDays(pickupDate: string, returnDate: string): number {
        const pickup = new Date(pickupDate);
        const returnD = new Date(returnDate);
        const diffTime = Math.abs(returnD.getTime() - pickup.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays || 1;
    }

    /**
     * Crea una reserva completa
     */
    createReservation(
        vehicle: Vehicle,
        city: string,
        pickupDate: string,
        returnDate: string
    ): Reservation {
        const days = this.calculateDays(pickupDate, returnDate);
        const pricePerDay = parseFloat(vehicle.price);
        const totalPrice = this.calculateTotalPrice(pricePerDay, days);

        return {
            vehicle,
            city,
            pickupDate,
            returnDate,
            days,
            totalPrice,
        };
    }

    /**
     * Valida los datos del cliente
     */
    validateCustomerData(data: CustomerData): { isValid: boolean; errors: string[] } {
        const errors: string[] = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres');
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('El email no es válido');
        }

        if (!data.phone || data.phone.trim().length < 7) {
            errors.push('El teléfono debe tener al menos 7 dígitos');
        }

        return {
            isValid: errors.length === 0,
            errors,
        };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Confirma una reserva con datos del cliente
     */
    confirmReservation(
        reservation: Reservation,
        customerData: CustomerData
    ): ReservationDetails {
        const validation = this.validateCustomerData(customerData);
        
        if (!validation.isValid) {
            throw new Error(`Datos inválidos: ${validation.errors.join(', ')}`);
        }

        return {
            ...reservation,
            customer: customerData,
            status: 'confirmed',
        };
    }
}

export const reservationUseCase = new ReservationUseCase();
