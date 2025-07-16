# Mobile store

## Rutas

/en
/cart
/product?id=

/es
/cart
/product?id=

## Funcionalidades a destacar

- Localización con intl
  - Uso de módulos para mejorar escalabilidad horizontal
- Inyección de dependencias con inversify
  - Uso de módulos para mejorar escalabilidad horizontal
- Uso de estado con context y patrón reducer
- Llamadas a API con tokens de cancelación y debounce para optimizar datos compartidos y evitar sobrecargas en el servidor
- Lazy load para las imágenes
- Implementación de un event bus con RXJS para permittir la comunicación entre funcionalidades, evitando acoplamiento
- Uso de ErrorBoundary customizado para gestionar errores
- Deploy en ghpages
- Uso de nextjs y SSR

- Tests de architectura con ts-arch
- Tests de accesibilidad con axe-core
- Tests muy reales y basados en escenarios con MSW para mockear respuestas del servidor
- Tests de tolerancia a fallos utilizando MSW para parar el servidor

## Podríamos seguir trabajando en

- Crear un logger y usarlo en HttpService cuando hay un error en el servidor. Así podríamos gestionarlos conectándonos a un servicio y permitir cambiarlo fácilmente
- Estilos
- Mayor abstracción de componentes
- Accesibilidad
- Error boundary más pequeños
- Suspense
- ViewTransitions
- Desacoplar carrito del estado global
- Mejor SSR (había utilizado NextJS de una forma muy básica en el pasado). Quizás podríamos renderizar en servidor algunas páginas si supiéramos los id que hay en base de datos (o los más llamados)
  ...

## Instalación

```sh
npm ci
```

## Ejecutar en local

Necesitarás configurar las variables de entorno. Son del tipo:

```json
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_API_KEY=your-api-key-here
NEXT_PUBLIC_SEARCH_LIMIT=20
```

Crea un archivo llamado .env.local en la carpeta root del proyecto con las mismas.

```sh
npm run dev
```

## Tests

```sh
npm run test
```

También puedes ejecutarlos en modo watch con la UI de vitest

```sh
npm run test:watch
```

## Formateo de archivos con prettier

```sh
npm run format:check
npm run format:fix
```

## Lintando archivos con eslint

```sh
npm run lint:check
npm run lint:fix
```
