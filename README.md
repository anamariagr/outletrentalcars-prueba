# Alquiler de Autos - Proyecto Full Stack

## 🚀 Cómo ejecutar el proyecto

### 1. Requisitos previos
- Node.js >= 18
- npm >= 9
- PHP >= 8.1
- Composer
- MySQL

### 2. Clonar el repositorio
```bash
git clone <url-del-repo>
cd alquiler-autos
```

### 3. Instalar dependencias
#### Frontend (Next.js)
```bash
cd web
npm install
```
#### Backend (Laravel)
```bash
cd ../api
composer install
cp .env.example .env
php artisan key:generate
```

### 4. Configurar la base de datos
- Crea una base de datos MySQL llamada `autos`.
- Ajusta las credenciales en `api/.env`.

### 5. Ejecutar migraciones y seeders
```bash
php artisan migrate --seed
```

### 6. Levantar el backend
```bash
php artisan serve
```

### 7. Levantar el frontend
En otra terminal:
```bash
cd web
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

---


### Separación Frontend/Backend
Decidí separar el frontend (Next.js) y el backend (Laravel) porque quería practicar una arquitectura moderna, escalable y fácil de mantener.

### Next.js + TypeScript
Usé Next.js ya que me da SSR (Server Side Rendering) y una estructura clara para páginas y rutas. TypeScript lo elegí porque me ayuda a evitar errores tontos y hace el código más fácil de entender.

### Laravel para la API
Laravel es súper productivo para crear APIs REST. Me gusta su sistema de migraciones y seeders, así puedo poblar la base de datos rápido y de forma reproducible.

### Redux Toolkit
Aunque para un proyecto chico podría usar solo useState, use coo se indicaba, Redux Toolkit para practicar manejo de estado global y porque facilita escalar la app si crece.

### Tailwind CSS
Usé Tailwind y esto me permitio prototipar rápido y mantener estilos consistentes sin pelearme con archivos CSS enormes.

### Clean Code y SOLID
Intenté aplicar principios de Clean Code y SOLID: componentes pequeños, funciones con una sola responsabilidad y lógica desacoplada. Así, si tengo que cambiar algo, no rompo todo lo demás.

### Hooks y Thunks
Usé hooks personalizados para separar lógica de negocio (como el cálculo de precios) y thunks para manejar llamadas asíncronas a la API.

---


