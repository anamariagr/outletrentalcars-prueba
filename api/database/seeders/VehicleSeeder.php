<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Autos para Los Cabos
        \App\Models\Vehicle::create([
            'name' => 'VOLKSWAGEN Jetta',
            'price' => 259907,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZE/SCAR_US.webp',
            'description' => 'Estándar, 5 pasajeros, 3 maletas, A/C, transmisión automática. Ideal para recorrer Los Cabos con comodidad.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'FORD Escape',
            'price' => 324588,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZI/IFAR_US.webp',
            'description' => 'SUV mediana, 5 pasajeros, 2 maletas, A/C, transmisión automática. Perfecta para aventuras en Los Cabos.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'CHEVROLET Spark',
            'price' => 268936,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZE/ECAR_US.webp',
            'description' => 'Económico, 4 pasajeros, 2 maletas, A/C, transmisión automática. Bajo consumo, ideal para ciudad.',
            'transmission' => 'Automática',
            'seats' => 4,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'CHEVROLET Malibu',
            'price' => 274894,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZE/FCAR_US.webp',
            'description' => 'Full-size, 5 pasajeros, 4 maletas, A/C, transmisión automática. Espacioso y cómodo.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'MAZDA 3',
            'price' => 275375,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZE/ICAR_US.webp',
            'description' => 'Intermedio, 5 pasajeros, 3 maletas, A/C, transmisión automática. Excelente para viajes en pareja o familia.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'KIA Soul',
            'price' => 286623,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZI/CCAR_US.webp',
            'description' => 'Compacto, 5 pasajeros, 3 maletas, A/C, transmisión automática. Versátil y moderno.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'FORD F150',
            'price' => 289732,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/AL/PPAR_US.png',
            'description' => 'Pick Up Premium, 4 pasajeros, 4 maletas, A/C, transmisión automática. Potencia y espacio para cualquier necesidad.',
            'transmission' => 'Automática',
            'seats' => 4,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'TOYOTA Corolla',
            'price' => 288511,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZI/ICAR_US.webp',
            'description' => 'Intermedio, 5 pasajeros, 3 maletas, A/C, transmisión automática. Confiable y eficiente.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'FORD Focus',
            'price' => 289140,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/ZI/CCAR_US.webp',
            'description' => 'Compacto, 5 pasajeros, 2 maletas, A/C, transmisión automática. Ideal para recorridos urbanos.',
            'transmission' => 'Automática',
            'seats' => 5,
        ]);

        \App\Models\Vehicle::create([
            'name' => 'MITSUBISHI Mirage',
            'price' => 268936,
            'image' => 'https://dce.outletrentalcars.com/vehicle_agency/AL/ECAR_US.webp',
            'description' => 'Económico, 4 pasajeros, 2 maletas, A/C, transmisión automática. Práctico y eficiente.',
            'transmission' => 'Automática',
            'seats' => 4,
        ]);
// ...existing code...
    }
}
