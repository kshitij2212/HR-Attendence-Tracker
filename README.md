# 📊 HR Attendance Tracker

> A comprehensive web-based solution for managing employee attendance, leaves, and payroll efficiently.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

## 📖 Overview

The **HR Attendance Tracker** is designed to streamline workforce management by digitizing attendance tracking, leave management, and payroll processing. It replaces manual paperwork with a centralized, real-time system that empowers HR administrators to make data-driven decisions and employees to manage their records with ease.

## ✨ Key Features

- **🔐 Role-Based Access Control (RBAC)**: Secure login for Admins, HR, and Employees with distinct permissions.
- **⏱️ Smart Attendance**: Digital check-in/check-out with automatic working hour calculation.
- **📅 Leave Management**: Streamlined leave application process with approval workflows.
- **💰 Payroll Integration**: Automated salary calculation based on attendance and deductions.
- **📊 Interactive Dashboards**: Real-time insights for Admins and personal stats for Employees.
- **📱 Responsive Design**: Modern UI built with React and Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **Axios** (API Communication)

### Backend
- **Node.js & Express.js** (Server)
- **Prisma ORM** (Database Access)
- **PostgreSQL** (Database)
- **JWT** (Authentication)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v16+)
- PostgreSQL installed and running

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/HR-Attendence-Tracker.git
cd HR-Attendence-Tracker
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/hr_db?schema=public"
JWT_SECRET="your_super_secret_key"
PORT=3000
```

Run database migrations:
```bash
npx prisma migrate dev --name init
```

Start the server:
```bash
npm start
# or for development
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory (if needed):
```env
VITE_API_URL=http://localhost:3000
```

Start the development server:
```bash
npm run dev
```

## 📂 Project Structure

```
HR-Attendence-Tracker/
├── backend/            # Express server & Prisma ORM
│   ├── prisma/         # Database schema & migrations
│   ├── src/            # Controllers, Routes, Middlewares
│   └── ...
├── frontend/           # React application
│   ├── src/            # Components, Pages, Context
│   └── ...
└── README.md           # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.


