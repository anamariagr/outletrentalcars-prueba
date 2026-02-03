// Interfaces pequeñas y específicas para componentes

import { Vehicle } from '@/domain/entities/Vehicle';

// Props para componentes de vehículos
export interface VehicleCardProps {
    vehicle: Vehicle;
    onSelect: (vehicle: Vehicle) => void;
}

export interface VehicleDetailsProps {
    vehicle: Vehicle;
}

// Props para componentes de búsqueda
export interface SearchFormProps {
    onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
    city: string;
    pickupDate: string;
    returnDate: string;
}

// Props para componentes de reserva
export interface ReservationFormProps {
    vehicle: Vehicle;
    city: string;
    pickupDate: string;
    returnDate: string;
    days: number;
    totalPrice: number;
    onConfirm: (e: React.FormEvent) => void;
}

export interface PriceSummaryProps {
    pricePerDay: number;
    days: number;
    totalPrice: number;
}

// Props para componentes comunes
export interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    className?: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
