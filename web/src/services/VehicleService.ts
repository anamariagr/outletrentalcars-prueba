// Implementa IVehicleRepository y maneja la comunicación con la API
import { IVehicleRepository } from '@/domain/repositories/IVehicleRepository';
import { Vehicle } from '@/domain/entities/Vehicle';

class VehicleService implements IVehicleRepository {
    private readonly baseUrl: string;

    constructor(baseUrl: string = 'http://localhost:8000/api') {
        this.baseUrl = baseUrl;
    }

    async getAll(): Promise<Vehicle[]> {
        try {
            const response = await fetch(`${this.baseUrl}/vehicles`);
            if (!response.ok) {
                throw new Error('Error al obtener vehículos');
            }
            const data = await response.json();
            // El backend retorna un array directamente
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('VehicleService.getAll error:', error);
            throw error;
        }
    }

    async getById(id: number): Promise<Vehicle | null> {
        try {
            const response = await fetch(`${this.baseUrl}/vehicles/${id}`);
            if (!response.ok) {
                return null;
            }
            const data = await response.json();
            return data.data || null;
        } catch (error) {
            console.error('VehicleService.getById error:', error);
            return null;
        }
    }

    async getAvailable(city?: string, startDate?: string, endDate?: string): Promise<Vehicle[]> {
        try {
            const params = new URLSearchParams();
            if (city) params.append('city', city);
            if (startDate) params.append('start_date', startDate);
            if (endDate) params.append('end_date', endDate);

            const url = `${this.baseUrl}/vehicles${params.toString() ? '?' + params.toString() : ''}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Error al obtener vehículos disponibles');
            }
            
            const data = await response.json();
            return data.data || [];
        } catch (error) {
            console.error('VehicleService.getAvailable error:', error);
            throw error;
        }
    }
}

export const vehicleService = new VehicleService();
