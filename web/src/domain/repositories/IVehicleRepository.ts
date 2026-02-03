// Define el contrato para operaciones de vehículos sin implementación concreta
import { Vehicle } from '../entities/Vehicle';

export interface IVehicleRepository {
    getAll(): Promise<Vehicle[]>;
    getById(id: number): Promise<Vehicle | null>;
    getAvailable(city?: string, startDate?: string, endDate?: string): Promise<Vehicle[]>;
}
