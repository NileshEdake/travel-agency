# Travel Agency Booking System - Backend

This is the backend application for the **Travel Agency Booking System**. It provides REST APIs to manage tour packages, bookings, and basic admin functionalities. The backend interacts with a MongoDB database to store and retrieve data.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Deployed Link](#deployed-link)

---

## Features

- **Tour Packages Management**: 
  - Retrieve all packages.
  - Add, update, and delete packages.
- **Customer Booking**:
  - Book a travel package by submitting customer details.
  - Generate a booking invoice.
- **Admin Panel**:
  - View all submitted bookings.

---

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose (for MongoDB modeling), CORS, dotenv (for environment variable management)

---

## Setup and Installation

To run the backend locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NileshEdake/travelAgency-backend.git
   cd travel-agency-backend
---
Install dependencies:

 ```bash
npm install
---
Set up environment variables: Create a .env file in the root directory and add the following variables:

env

 ```bash
PORT=5000
MONGO_URI=<your-mongodb-connection-string>

Run the server:


 ```bash
npm start

The server will start on http://localhost:5000.
---

Run in development mode:

 ```bash

npm run dev
This uses nodemon for hot reloading.

---
###Available Scripts
In the project directory, you can run:

npm start: Starts the backend server.
npm run dev: Starts the server in development mode using nodemon.

API Endpoints
Here are the key API endpoints provided by the backend:


---
###Packages
GET /api/packages: Retrieve all tour packages.
GET /api/packages/:id: Retrieve details of a specific package.
POST /api/admin/packages: Add a new package (Admin only).
PUT /api/admin/packages/:id: Update an existing package (Admin only).
DELETE /api/admin/packages/:id: Delete a package (Admin only).
Bookings
POST /api/bookings: Submit a package booking.
GET /api/admin/bookings: Retrieve all bookings (Admin only).
---
### Deployed-Link
Backend: [Travel Agency Backend](https://travel-agency-backend-production.up.railway.app/api)

