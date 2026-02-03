
# Alquiler de Autos 

 guia para ejecutar el proyecto 

 1. Requisitos previos

- Node.js >= 18
- npm >= 9
- PHP >= 8.1
- Composer
- MySQL


# 2. Clonar el repositorio

```bash
git clone <url-del-repo>
cd alquiler-autos
```


# 3. Instalar dependencias

```bash
cd web
npm install
```
## Backend (Laravel)
cd ../api
composer install
cp .env.example .env
php artisan key:generate
```


### 4.  base de datos
- Crea base de datos MySQL llamada `autos`.

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


Frontend/Backend
usé next.js para el ejercicio como se indico en la prueba y laravel para la parte de back ya para el funcionamiento de la base de datos y la información que va hacia el front.

ya que next me da SSR 
y una estructura clara para páginas y rutas. TypeScript me ayuda a evitar errores y hace el código más fácil de entender.

Laravel es súper funcional para crear APIs REST. Me gusta su sistema de migraciones y seeders, así puedo poblar la base de datos rápido y ya que ha sido uno de mis principales frameworks en mi experiencia lo decidí utilizar.

use Redux Toolkit para practicar manejo de estado global y porque facilita escalar la app si crece.

Tailwind CSS
se uso Tailwind lo que me permitio prototipar rápido y mantener estilos consistentes sin tener que usar archivos CSS muy grandes.

Intenté aplicar principios de Clean Code y SOLID: componentes pequeños, funciones con una sola responsabilidad y lógica. y si por alguna rason tuviera que cambiar algo, no rompo todo lo demás.

Usé hooks personalizados para separar lógica de negocio (como el cálculo de precios) y thunks para manejar llamadas asíncronas a la API.

---
