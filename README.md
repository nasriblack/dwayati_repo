# Dwayati Monorepo

Dwayati is a **medication and prescription management app** built with a **monorepo architecture** using **Next.js, Express, and React Native**. The goal is to create a seamless experience for users across web and mobile platforms, backed by a robust API.

## 📝 Features

- As user i can view all medications
- As user i can view all prescriptions
- as user i can view the details of a medication
- as user i can view the details of a prescription

- As user i can create a new medication
- As user i can create a new prescription

- As user i can update a medication (is the medication still available)

- As user i can assigne a medication to a prescription

- As user i can view all prescriptions for a medication
- As user i can view all medications for a prescription

- as user i can filter the prescriptions by medication
- as user i can filter the medications by prescription

## 🚀 Tech Stack

- **Next.js** - Landing Page
- **Express** - API
- **React Native** - Mobile App
- **TypeScript** - Strongly typed development
- **Turborepo + pnpm** - Monorepo management
- **NativeWind** - Tailwind CSS for React Native
- **Zod** - Schema validation
- **Expo Router** - Navigation for mobile
- **WatermelonDB** - Offline-first database for mobile

---

## 📂 Project Structure

```
dwayati-monorepo/
│── apps/                  # Applications
│   ├── api/               # Express API
│   ├── web/               # Next.js Landing Page
│   ├── mobile/            # React Native App
│
│── packages/              # Shared packages
│   ├── types/             # Shared TypeScript types
│   ├── ui/                # (Optional) Shared UI components
│   ├── typescript-config/ # Shared config of typescript
│
│── .github/               # GitHub workflows
│── .turbo/                # Turborepo cache
│── package.json           # Root package.json
│── turbo.json             # Turborepo config
│── README.md              # Project documentation
```

---

## 📜 API Routes (Express)

# /api/v1

| Method | Endpoint             | Description               |
| ------ | ----------------     | ------------------------- |
| GET    | `/all-prescription`  | Fetch all prescriptions   |
| GET    | `/all-medications`   | Fetch all medications     |
| POST   | `/prescription`      | Create a new prescription |
| POST   | `/medication`        | Create a new medication   |
| PUT    | `/medication/:id`    | Update existing medication|

---

Import example:

```ts
import { Prescription } from "@dwayati/types";
```

---

## 💡 Getting Started

### 1️⃣ Install Dependencies

```sh
pnpm install
```

### 2️⃣ Run the Monorepo

```sh
pnpm dev
```

This will start:

- **Next.js** (Landing Page)
- **Express** (API)
- **React Native** (Mobile App)

### 3️⃣ Run Mobile App Separately

```sh
cd apps/mobile
pnpm expo start
```

---

## ✅ Next Steps

- **[X] Define API Endpoints with Express**
- **[ ] Write tests for api**
- **[ ] Connect React Native to API**
- **[ ] Set Up WatermelonDB for Offline Support**
- **[ ] Write E2E Tests with Maestro**

## Issues

### Prisma Generate/Migrate Error
If you're encountering errors while running `npx prisma generate` or `npx prisma migrate`, it's often due to conflicts with running Prisma processes. 

#### Solution:
1. Close all running Prisma processes:
   - Prisma Studio
   - Any running Docker containers related to Prisma
   - Your running application (if it uses Prisma)
2. Restart your terminal and rerun the command.


## GitHub Resources

### Useful Repositories
Here are some GitHub repositories that were helpful during development:

- **[prisma/prisma](https://github.dev/YounesseElkars/Express-Prisma-TypeScript/blob/main/prisma/schema.prisma)**: Helped me to implement the structure of the api , prisma , and seeding the prisma data , ( it got auth , 3 models , zod , httpStatuscode)
- **[node-express-prisma-auth](https://github.com/gothinkster/node-express-prisma-v1-official-app)**
- **[ecommerce-api](https://github.dev/OmkarK45/ecommerce-backend-ts-pgsql/blob/main/src/validation/index.ts)**: e commerce api , auth middleware , prisma , validation using yup
- **[good example for auth](https://github.com/sushantrahate/express-typescript-prisma-postgresql/blob/main/src/middleware/validation.middleware.ts)**
- **[express-ts-prisma-pg template](https://github.com/henzyd/ts-express-prisma-pg-template/blob/main/src/controllers/auth.ts)**
- **[express-ts-prisma-started include middleware with permissions](https://github.com/LuchoBazz/express-ts-rest-starter-kit/blob/main/prisma/schema.prisma)**

These resources were instrumental in solving various challenges and improving the project's overall structure.