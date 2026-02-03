import { Vehicle } from './Vehicle';

export interface Reservation {
    vehicle: Vehicle;
    city: string;
    pickupDate: string;
    returnDate: string;
    totalPrice: number;
    days: number;
}

export interface CustomerData {
    name: string;
    email: string;
    phone: string;
}

export interface ReservationDetails extends Reservation {
    customer?: CustomerData;
    status: 'pending' | 'confirmed' | 'cancelled';
}
