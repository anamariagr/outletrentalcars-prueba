# Resumen de la Estructura del Proyecto

## Frontend (`web/`)

### components/
- **features/**
  - `VehicleCard.tsx`: Muestra información de un vehículo.
  - `SearchForm.tsx`: Formulario para buscar vehículos.
  - `ReservationForm.tsx`: Formulario para reservar un vehículo.
  - `ConfirmForm.tsx`: Confirmación de datos de reserva.
- **common/**
  - Componentes de uso general como modales y botones.
- **types/props.ts**: Define los tipos TypeScript para las props de los componentes.

### domain/
- **entities/**: Define las entidades principales (`Vehicle.ts`, `Reservation.ts`).
- **repositories/**: Interfaces para acceso a datos (ej. `IVehicleRepository.ts`).
- **useCases/**: Casos de uso, como la lógica para reservar (`ReservationUseCase.ts`).

### store/
- `store.ts`: Configuración del store de Redux.
- **slices/**: Slices para vehículos y búsqueda.
- `Providers.tsx`: Proveedor de Redux para la app.

### services/
- `VehicleService.ts`: Servicio para interactuar con la API de vehículos.

### hooks/
- `useRentalCalculation.ts`: Custom hook para lógica de cálculo de alquiler.

---

## Backend (`api/`)

### app/Http/Controllers/
- `VehicleController.php`: Lógica para vehículos.
- `HelloController.php`, `Controller.php`: Ejemplo/base.

### app/Models/
- `Vehicle.php`, `User.php`: Modelos Eloquent que representan tablas de la base de datos.

### database/migrations/
- Scripts para crear tablas en la base de datos (usuarios, vehículos, tokens, etc.).

### database/seeders/
- Scripts para poblar la base de datos con datos de ejemplo.

### routes/
- Define las rutas de la API y web (`api.php`, `web.php`, etc.).

### config/
- Configuración de Laravel (base de datos, mail, cache, etc.).

### resources/views/
- Vistas Blade para la parte visual del backend (ejemplo: `welcome.blade.php`).

---

## ¿Por qué se puso cada archivo?
- **Componentes**: Separan la UI en piezas reutilizables y mantenibles.
- **Módulos de dominio**: Centralizan la lógica de negocio y las reglas del sistema.
- **Store**: Permite compartir y manejar el estado global de la app de forma eficiente.
- **Servicios**: Abstracción para consumir la API y desacoplar la lógica de red.
- **Hooks**: Reutilización de lógica entre componentes.
- **Controladores y modelos (API)**: Siguen el patrón MVC de Laravel, separando lógica de negocio, acceso a datos y rutas.
- **Migraciones y seeders**: Facilitan la creación y llenado de la base de datos de forma controlada y reproducible.
- **Rutas y configuración**: Organizan el acceso a los endpoints y la configuración general del framework.

---

Este resumen te permite explicar la arquitectura y el propósito de cada parte del proyecto en una entrevista técnica.
