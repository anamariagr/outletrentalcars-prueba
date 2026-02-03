// Representa el modelo de negocio de un vehículo
export interface Vehicle {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    transmission: string;
    seats: number;
    availability: boolean;
}

// Propiedades específicas del vehículo
export interface VehiclePrice {
    amount: number;
    currency: string;
}

export interface VehicleSpecifications {
    transmission: string;
    seats: number;
    fuelType?: string;
    category?: string;
}
