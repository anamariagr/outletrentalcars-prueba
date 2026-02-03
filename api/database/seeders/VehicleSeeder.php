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
        // Economy / Compact
        \App\Models\Vehicle::create([
            'name' => 'Chevrolet Spark',
            'price' => 35.00,
            'image' => 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
            'description' => 'Compacto económico, ideal para moverse por la ciudad con bajo consumo.',
            'transmission' => 'Automatic',
            'seats' => 4,
        ]);

        // Intermediate / Sedan
        \App\Models\Vehicle::create([
            'name' => 'Toyota Camry 2024',
            'price' => 60.00,
            'image' => 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
            'description' => 'Sedán espacioso y confortable, perfecto para viajes largos en carretera.',
            'transmission' => 'Automatic',
            'seats' => 5,
        ]);

        // SUV
        \App\Models\Vehicle::create([
            'name' => 'Ford Explorer SUV',
            'price' => 95.00,
            'image' => 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
            'description' => 'Camioneta robusta con gran espacio para equipaje y familia.',
            'transmission' => 'Automatic',
            'seats' => 7,
        ]);

        // Convertible / Sport
        \App\Models\Vehicle::create([
            'name' => 'Ford Mustang Convertible',
            'price' => 130.00,
            'image' => 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80',
            'description' => 'Disfruta del sol y la potencia con este icónico deportivo americano.',
            'transmission' => 'Automatic',
            'seats' => 4,
        ]);
        
        // Minivan
        \App\Models\Vehicle::create([
            'name' => 'Chrysler Pacifica',
            'price' => 110.00,
            'image' => 'https://images.unsplash.com/photo-1612057404289-4ba6965dc24a?auto=format&fit=crop&w=800&q=80', // Placeholder using a van-like or generic interior/exterior if specific van unavailable
            'description' => 'La opción definitiva para familias grandes, con máximo confort y espacio.',
            'transmission' => 'Automatic',
            'seats' => 8,
        ]);
// ...existing code...
    }
}
