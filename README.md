## Overview

This HR Attendance Tracker is an Express-based REST API for managing employees, departments, attendance logs, leave requests, payroll records, and user accounts. The data layer is powered by Prisma and targets a MySQL database, with Prisma Client generated into `generated/prisma` for runtime use.

## Installation Guide

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file and set the `DATABASE_URL` variable for your MySQL instance, following Prisma's connection string format.
3. Apply the latest Prisma migrations to provision the database schema:
   ```s
   npx prisma migrate deploy
   ```
   (For local development with new changes, you can use `npx prisma migrate dev` instead.)
4. Generate the Prisma Client (only needed if the generated files are missing or out of date):
   ```
   npx prisma generate
   ```
5. Start the API server:
   ```
   node index.js
   ```
   Optionally, run with `npx nodemon index.js` during development for auto-reload.

