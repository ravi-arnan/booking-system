# 🍽️ THIS IS BALI — Restaurant Booking System

A full-stack restaurant reservation system built for **This is Bali**, an Indonesian restaurant in Ubud, Bali. Guests can explore the restaurant, browse the dining experience, read reviews, and make table reservations — all from a beautifully crafted single-page application.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

### 🌐 Customer-Facing
- **Landing Page** — Hero section, dining experience showcase, guest reviews & impressions, restaurant story, and FAQ
- **Online Reservation** — Multi-field booking form with date, time, party size, and special requests
- **Booking Confirmation** — Detailed confirmation page with booking summary
- **Modify Booking** — Guests can update their reservation details after booking

### 🔐 Admin Panel
- **Admin Login** — Password-protected admin access
- **Calendar Dashboard** — View and manage all reservations via an interactive calendar

---

## 🛠️ Tech Stack

| Layer      | Technology                                                       |
|------------|------------------------------------------------------------------|
| Frontend   | React 19, Vite 7, Lucide React, React Big Calendar, Moment.js   |
| Backend    | Express 5, Node.js                                               |
| Database   | PostgreSQL with Prisma ORM 7                                     |
| Styling    | Custom CSS with Inter & Outfit fonts                             |

---

## 📁 Project Structure

```
booking-system/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma        # Database schema
│   │   └── migrations/          # Database migrations
│   ├── routes/
│   │   ├── reservation.js       # Reservation CRUD endpoints
│   │   └── admin.js             # Admin authentication
│   ├── prisma.config.ts         # Prisma configuration
│   ├── server.js                # Express server entry point
│   ├── package.json
│   └── .env                     # Environment variables
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Images, logos, media files
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Navigation bar with Book Table CTA
│   │   │   ├── Hero.jsx         # Hero banner section
│   │   │   ├── BookingInfo.jsx  # Restaurant info cards
│   │   │   ├── DiningExperience.jsx
│   │   │   ├── GuestsImpression.jsx
│   │   │   ├── ReviewGallery.jsx
│   │   │   ├── GuestReviews.jsx
│   │   │   ├── OurStory.jsx
│   │   │   ├── ReadyToVisit.jsx
│   │   │   ├── FAQ.jsx          # Frequently Asked Questions
│   │   │   ├── Footer.jsx       # Footer with social links
│   │   │   ├── ReservationPage.jsx  # Booking form
│   │   │   ├── BookingConfirmation.jsx
│   │   │   ├── ModifyBooking.jsx
│   │   │   ├── AdminCalendar.jsx    # Admin dashboard
│   │   │   └── AdminLoginModal.jsx
│   │   ├── App.jsx              # Main app with hash-based routing
│   │   └── main.jsx             # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **PostgreSQL** ≥ 14
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/booking-system.git
cd booking-system
```

### 2. Set Up the Database

Create a PostgreSQL database:

```sql
CREATE DATABASE booking_system;
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
# PostgreSQL connection string
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/booking_system"

# Server port
PORT=3001

# Admin password
ADMIN_PASSWORD=your_secure_password
```

Run database migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the server:

```bash
npm run dev
```

The API will be available at `http://localhost:3001`.

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📡 API Endpoints

### Reservations

| Method | Endpoint                  | Description                 |
|--------|---------------------------|-----------------------------|
| GET    | `/api/reservations`       | List all reservations       |
| POST   | `/api/reservations`       | Create a new reservation    |
| PUT    | `/api/reservations/:id`   | Update a reservation        |

### Admin

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| POST   | `/api/admin/login` | Admin login              |

### Health Check

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/api/health`  | API health status    |

### Request Body — Create/Update Reservation

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+62 812 3456 7890",
  "partySize": 4,
  "date": "2026-03-15",
  "time": "19:00",
  "specialRequest": "Window seat preferred"
}
```

---

## 🗄️ Database Schema

```prisma
model Reservation {
  id             Int      @id @default(autoincrement())
  name           String
  email          String
  phone          String
  partySize      Int
  date           DateTime
  time           String
  specialRequest String?
  createdAt      DateTime @default(now())
}
```

---

## 🧑‍💻 Available Scripts

### Backend

| Command            | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start server with hot-reload       |
| `npm start`        | Start server in production         |
| `npm run db:migrate` | Run Prisma migrations            |
| `npm run db:generate` | Generate Prisma client          |
| `npm run db:studio`   | Open Prisma Studio              |

### Frontend

| Command            | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start Vite dev server              |
| `npm run build`    | Build for production               |
| `npm run preview`  | Preview production build           |
| `npm run lint`     | Run ESLint                         |

---

## 📄 License

This project is licensed under the ISC License.

---

<p align="center">
  Made with ❤️ for <strong>This is Bali</strong> — Indonesian Restaurant, Ubud
</p>
