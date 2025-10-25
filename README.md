# Demlur — Tienda de celulares (Next.js + TypeScript)

Proyecto de ejemplo con Next.js (app dir), TypeScript y Tailwind. Incluye un catálogo simple, contexto de carrito y un pequeño servidor Express opcional.

Cómo ejecutar (desarrollo)

1. Instalar dependencias:

```powershell
cd C:\Users\USER\demlur-proyecto
npm install
```

2. Levantar frontend (Next.js):

```powershell
npm run dev
```

3. (Opcional) Levantar backend Express (ts-node):

```powershell
npm run server
```

Empujar este repositorio a GitHub

- Recomiendo usar GitHub CLI (`gh auth login`) o configurar una llave SSH en tu equipo. Evita insertar tokens en texto plano.

Comandos mínimos (HTTPS) para subir el proyecto a `https://github.com/GuillermoJimenezT/Demlur.git` desde PowerShell:

```powershell
cd C:\Users\USER\demlur-proyecto
git init
git add .
git commit -m "Initial Demlur project"
git remote add origin https://github.com/GuillermoJimenezT/Demlur.git
git branch -M main
git push -u origin main
```

Si usas un token personal para autenticación HTTPS en el prompt, introdúcelo cuando Git lo pida — pero **no** pegues el token en lugares públicos ni en este chat. Mejor: usa `gh auth login` o una llave SSH.

Si quieres, puedo preparar un script o ayudarte a configurar SSH/GH CLI.

Licencia

Este repositorio es un ejemplo; ajusta la licencia según necesites.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
