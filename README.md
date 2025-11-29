# Distributed E-Commerce Platform

> 🚧 **Status:** Under Active Development

A microservices-based e-commerce platform built with modern TypeScript tooling and managed as a Turborepo monorepo.

## 🏗️ Architecture

### Frontend Applications
- **`client`** - Customer-facing Next.js app (port 3002)
- **`admin`** - Admin dashboard Next.js app (port 3003)

### Backend Microservices
- **`product_service`** - Express + CORS (port 8000)
- **`order_service`** - Fastify (port 8001) 
- **`payment_service`** - Hono + Node Server (port 8002)

### Shared Packages
- **`@repo/ui`** - Shared React component library
- **`@repo/typescript-config`** - TypeScript configurations
- **`@repo/eslint-config`** - ESLint configurations

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 11.6.2

### Installation
```sh
npm install
```

### Development
Start all services in watch mode:
```sh
npx turbo dev
```

This will run:
- Client app at http://localhost:3002
- Admin app at http://localhost:3003
- Product service at http://localhost:8000
- Order service at http://localhost:8001
- Payment service at http://localhost:8002

### Type Checking
```sh
npx turbo check-types
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (Turbopack)
- **Backend:** Fastify, Hono, Express
- **Language:** TypeScript
- **Monorepo:** Turborepo
- **Dev Tools:** nodemon, tsx
- **Package Manager:** npm workspaces

## 🔄 Hot Reload

All microservices use `nodemon` for reliable file watching and automatic restarts. Changes are detected instantly with graceful shutdown handling to prevent port conflicts.

## 📝 Development Notes

- Each service includes SIGINT/SIGTERM handlers for clean shutdowns
- Health endpoints available at `/health` on order and payment services
- Services automatically restart on code changes without manual intervention

## 👨‍💻 Author

**MrBabylonian**

---

Built with [Turborepo](https://turborepo.com/)
