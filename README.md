# Employee Management System (EMS) &nbsp;![Status](https://img.shields.io/badge/status-active-brightgreen) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](#-contributing)  
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-43853D?logo=node.js&logoColor=white)](#-tech-stack) [![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](#-tech-stack) [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%2FLocal-47A248?logo=mongodb&logoColor=white)](#-tech-stack) [![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-E10098?logo=graphql&logoColor=white)](#-tech-stack)

The **Employee Management System (EMS)** is a full-stack application for managing employees, departments, job titles, employee types, and statuses. It also computes retirement information (expected retirement date, time left, and whether an employee is retired or approaching retirement).

Built with **Node.js**, **Express**, **MongoDB**, **GraphQL** on the backend and **React** on the frontend.

---

## 📌 Table of Contents
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Setup & Running Locally](#-setup--running-locally)
- [Open in Browser](#-open-in-browser)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Environment Variables](#-environment-variables)
- [Project Scripts](#-project-scripts)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License & Author](#-license--author)

---

## ✅ Key Features
- CRUD for **Employees**, **Departments**, **Titles**, **Types**, **Statuses**
- **Retirement calculations** (retirement date, time remaining, retired/upcoming)
- **Filtering & sorting** by department, type, status, and more
- **GraphQL API** for flexible querying/mutations
- **React UI** with charts and responsive layout

---

## 🏗 Architecture
```
employee-management-system/
├─ api-server/         # Node.js + Express + GraphQL (Apollo) + MongoDB
│  ├─ src/
│  │  ├─ models/       # Mongoose schemas
│  │  ├─ resolvers/    # GraphQL resolvers (queries/mutations)
│  │  ├─ schema/       # GraphQL type definitions
│  │  └─ index.js      # Server bootstrap
│  └─ package.json
└─ ui-server/          # React app (dashboard, lists, forms)
   ├─ src/
   │  ├─ components/   # Reusable UI
   │  ├─ pages/        # Dashboard, Employees, Retirements, etc.
   │  ├─ graphql/      # Queries/mutations/hooks
   │  └─ App.jsx
   └─ package.json
```

---

## 🧰 Tech Stack
- **Backend:** Node.js, Express, GraphQL (Apollo Server), MongoDB, Mongoose
- **Frontend:** React, React Router, (optionally) Bootstrap/React-Bootstrap, Recharts
- **Client Data:** Apollo Client (or Axios if mixing REST)
- **Tooling:** npm, ESLint/Prettier (optional)

---

## ✅ Prerequisites
- **Node.js** (LTS)
- **npm** or **yarn**
- **MongoDB** (local or Atlas connection URI)

---

## 🚀 Setup & Running Locally

### 1) Clone
```bash
git clone https://github.com/foundertitan/employee-management-system.git
cd employee-management-system
```

### 2) Backend (API)
```bash
cd api-server
npm install
# Create a .env (see "Environment Variables" below)
npm run dev   # or: npm start
```

### 3) Frontend (UI)
```bash
cd ../ui-server
npm install
npm start
```

---

## 🌐 Open in Browser
- **Frontend:** http://localhost:3000  
- **GraphQL endpoint:** http://localhost:4000/graphql (or whatever your backend prints)

---

## 🧭 Usage
- Navigate the **Dashboard** to view summaries and charts.
- Use **Manage Employees** to **add / edit / delete** employees.
- **Filter** and **sort** by department, type, or status.
- Check **Upcoming Retirements** to see who’s nearing retirement (based on computed data).
- Open detail **views/modals** to review or update a single employee.

---

## 🔐 Environment Variables

Create a **`.env`** file in **`api-server/`**:
```env
# Mongo connection
MONGODB_URI=mongodb://localhost:27017/ems   # or your Mongo Atlas URI

# Server
PORT=4000

# (Optional) JWT or session secrets if you add auth later
JWT_SECRET=changeme_please
```

(Optional) In **`ui-server/`**, if you need a custom API URL:
```env
REACT_APP_API_URL=http://localhost:4000/graphql
```

---

## 🧪 Project Scripts

### Backend (`api-server/package.json`)
- `npm run dev` — run with nodemon (recommended during development)  
- `npm start` — run server  
- *(optional)* `npm run seed` — seed initial data if you add a seeder  

### Frontend (`ui-server/package.json`)
- `npm start` — start dev server (React)  
- `npm run build` — production build  
- `npm test` — run tests (if configured)

---

## 🔮 Future Enhancements
- Role-based auth (Admin/HR/Employee)  
- Export (CSV/Excel/PDF)  
- Email/push notifications for upcoming retirements  
- Bulk import (CSV)  
- Server-side pagination for large datasets  
- Advanced multi-criteria filters  
- Improved error handling, validation, and test coverage  
- Cloud deployment (Render/Heroku/AWS/Vercel)  
- Dark mode & theme customization

---

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch: `git checkout -b feature/my-change`  
3. Commit: `git commit -m "feat: add my change"`  
4. Push: `git push origin feature/my-change`  
5. Open a Pull Request describing your changes  

Please follow the existing naming and code style guidelines where applicable.

---

## 📜 License & Author
This project is open-source under the **MIT License**.

**Author/Maintainer:** FounderTitan  
**GitHub:** [foundertitan](https://github.com/foundertitan)
