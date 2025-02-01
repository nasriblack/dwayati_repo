# Dwayati Monorepo

Dwayati is a **medication and prescription management app** built with a **monorepo architecture** using **Next.js, NestJS, and React Native**. The goal is to create a seamless experience for users across web and mobile platforms, backed by a robust API.


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
- **NestJS** - API
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
│   ├── api/               # NestJS API  
│   ├── web/               # Next.js Landing Page  
│   ├── mobile/            # React Native App  
│  
│── packages/              # Shared packages  
│   ├── types/             # Shared TypeScript types  
│   ├── ui/                # (Optional) Shared UI components  
│  
│── .github/               # GitHub workflows  
│── .turbo/                # Turborepo cache  
│── package.json           # Root package.json  
│── turbo.json             # Turborepo config  
│── README.md              # Project documentation  
```

---

## 📜 API Routes (NestJS)

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/medications`   | Fetch all medications     |
| GET    | `/prescriptions` | Fetch all prescriptions   |
| POST   | `/prescriptions` | Create a new prescription |

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
- **NestJS** (API)
- **React Native** (Mobile App)

### 3️⃣ Run Mobile App Separately

```sh
cd apps/mobile
pnpm expo start
```

---

## ✅ Next Steps

- **[ ] Define API Endpoints with NestJS**
- **[ ] Connect React Native to API**
- **[ ] Set Up WatermelonDB for Offline Support**
- **[ ] Write E2E Tests with Maestro**


