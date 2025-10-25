# Demlur — Tienda de celulares (Proyecto estudiantil)

Autor: Guillermo Jimenez

Fecha: 25/10/2025

Repo: https://github.com/GuillermoJimenezT/Demlur.git

Demlur es una aplicación web de ejemplo desarrollada con Next.js (App Router) y TypeScript que simula la venta online de teléfonos celulares. El propósito del proyecto es demostrar conceptos fundamentales de desarrollo web moderno: estructura de una aplicación React/Next, manejo de estado con Context API, integración básica de un backend con Express y diseño con Tailwind CSS.

Objetivos
---------

- Construir una SPA/SSR ligera usando Next.js y TypeScript.
- Implementar un catálogo de productos (teléfonos) con datos locales.
- Implementar un carrito de compras simple con estado global (Context API).
- Exponer un endpoint mínimo con Express para cuando se necesite un API.
- Aprender a preparar y versionar el proyecto para su despliegue en GitHub.

Tecnologías y versiones aproximadas
----------------------------------

- Next.js 16 (App Router)
- React 19
- TypeScript 5+
- Tailwind CSS 4 (configuración básica en `globals.css`)
- Express (servidor opcional en `server/index.ts`)

Estructura del repositorio
--------------------------

Raíz del proyecto (archivos más relevantes):

- `app/` — rutas y páginas (App Router)
  - `page.tsx` — página principal
  - `catalog/page.tsx` — catálogo de teléfonos
  - `layout.tsx` — layout global que incluye `Header` y `Footer`
- `app/components/` — componentes reutilizables (Header, Footer, PhoneCard, BrandFilter)
- `context/CartContext.tsx` — proveedor del carrito y hooks para usarlo
- `data/phones.ts` — datos locales de ejemplo (modelos y precios en COP)
- `types/index.ts` — tipos TypeScript: `Phone`, `CartItem`
- `server/index.ts` — servidor Express opcional (expone `/api/phones`)
- `public/` — archivos estáticos e imágenes (si se usan)
- `globals.css` — estilos globales (Tailwind importado)
- `README.md` — instrucciones básicas
- `DOCUMENTACION_Guillermo_Jimenez.md` — este documento

Contrato (pequeño)
------------------

Inputs:
- Acciones del usuario desde la interfaz: navegar catálogo, filtrar por marca, añadir/quitar productos del carrito.

Outputs:
- Renderizado del catálogo, estado del carrito en la UI, suma total en pesos (COP), y datos JSON desde `/api/phones` si se arranca el servidor Express.

Modos de fallo previstos
-----------------------

- Sin conexión al backend: la app usa datos locales (`data/phones.ts`) por defecto, por lo que la UI seguirá funcionando.
- Intentos de push a repositorio remoto sin permisos: se debe autenticar con la cuenta adecuada o usar un fork/PR.

Casos de uso y flujo de la aplicación
-----------------------------------

1. El usuario abre la página principal y hace clic en "Ver catálogo".
2. En el catálogo puede filtrar por marca (Samsung, Honor, Apple) y ver las tarjetas de producto.
3. El usuario añade uno o más productos al carrito. La información se mantiene en el Context global.
4. Se muestra el total en pesos colombianos (COP) y el número de artículos en el `Header`.

Cómo ejecutar (desarrollo)
-------------------------

Requisitos locales: Node.js y npm instalados.

1) Instalar dependencias:

```powershell
cd C:\Users\USER\demlur-proyecto
npm install
```

2) Levantar el frontend (Next.js dev):

```powershell
npm run dev
```

3) (Opcional) Levantar el backend Express (si quieres consumir la API):

```powershell
npm run server
```

Endpoint (si se ejecuta el servidor):

- `GET /api/phones` — devuelve JSON con los teléfonos de ejemplo.

Consideraciones académicas
-------------------------

- Este proyecto está pensado como un entregable para una asignatura de Desarrollo Web o Ingeniería de Software. Sirve para evidenciar comprensión de:
  - Estructuras de proyecto en Next.js (app dir).
  - Uso de TypeScript para tipado y robustez.
  - Manejo de estado con Context API (carrito simple).
  - Separación de responsabilidades entre frontend y backend (Express mínimo).
  - Preparación de un repositorio Git listo para subir a GitHub.

Estrategia de pruebas (mínima)
-----------------------------

- Manual: abrir la app, añadir/quitar productos, verificar el total.
- Automáticas (sugerido): añadir un test para la lógica del carrito (add/remove/total) usando Jest y React Testing Library.

Recomendaciones y mejoras futuras
---------------------------------

- Persistencia del carrito en `localStorage` para mantener el estado entre recargas.
- Modal de checkout y simulación de pago (sin procesador real) para completar la experiencia.
- Tests unitarios y de integración (Jest + Testing Library).
- Uso de `next/image` para optimizar imágenes si se incorporan assets remotos o locales.
- Despliegue en Vercel o en un contenedor Docker para producción.

Observaciones finales
---------------------

Este repositorio es una base didáctica: la arquitectura y el código están pensados para ser simples y fácilmente extensibles por estudiantes. El objetivo principal es enseñar los patrones y prácticas básicos, no entregar un producto listo para producción.

Contacto
--------

Guillermo Jimenez — enthuciastcoffe229@gmail.com

Licencia (sugerida)
-------------------

MIT — usar y modificar libremente para fines educativos.
