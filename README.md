## 📌 Overview

**StayRoyale** is a full-stack hotel discovery and room-booking website built with Vite + React on the frontend and for backend Node.js + Express is used. Guests can browse rooms, check availability, and manage bookings, while hotel owners can register a property, list rooms, and review booking information.

The project integrates authentication, MongoDB data persistence, image hosting, email notifications, and Stripe Checkout.

## ✨ Features

### 🧳 Guest experience
- Browse available rooms and explore room details.
- Check availability for selected check-in and check-out dates.
- Create bookings and view personal bookings.
- Continue to Stripe Checkout for payment.
- Receive booking details by email when SMTP is configured.

### 🏨 Hotel-owner experience
- Register a hotel/property.
- Add rooms with room type, nightly price, amenities, and images.
- Upload room images to Cloudinary.
- View rooms associated with the owner's property.
- Toggle room availability.
- View hotel bookings and dashboard booking/revenue summaries.

### 🔐 Integrations
- **Clerk** for authentication and webhook integration.
- **MongoDB + Mongoose** for application data.
- **Cloudinary** for room image storage.
- **Stripe** for checkout sessions and payment webhooks.
- **Nodemailer + Brevo SMTP relay** for email delivery.

> Features that depend on external providers require valid credentials and provider-side configuration.

## 🧱 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, Vite, React Router, Tailwind CSS 4 |
| UI feedback | React Hot Toast |
| HTTP requests | Axios |
| Authentication | Clerk React SDK |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Image uploads | Multer, Cloudinary |
| Payments | Stripe Checkout and webhooks |
| Email | Nodemailer, Brevo SMTP relay |
| Deployment | Vercel backend endpoint configured |

## 🗺️ Application Routes

### Frontend pages

| Route | Purpose |
|---|---|
| `/` | Home page with recommendations, destinations, offers, testimonials, and newsletter section |
| `/rooms` | Browse available rooms |
| `/rooms/:id` | View room details |
| `/my-bookings` | View the signed-in user's bookings |
| `/owner` | Hotel-owner dashboard |
| `/owner/add-room` | Add a room |
| `/owner/list-room` | View and manage listed rooms |

### Backend API groups

| Base path | Purpose |
|---|---|
| `/api/user` | User information and related operations |
| `/api/hotels` | Hotel registration |
| `/api/rooms` | Room listing, owner rooms, room creation, and availability |
| `/api/bookings` | Availability checks, booking creation, booking retrieval, and Stripe checkout |
| `/api/clerk` | Clerk webhook endpoint |
| `/api/stripe` | Stripe webhook endpoint |

**Backend API:** [`stay-royale-backend.vercel.app`](https://stay-royale-backend.vercel.app)

## 🏗️ Project Structure

```text
StayRoyale/
├── client/
│   ├── src/
│   │   ├── components/       # Shared UI components
│   │   ├── context/          # Shared application state and API configuration
│   │   ├── pages/            # Guest and hotel-owner pages
│   │   ├── App.jsx           # Frontend route configuration
│   │   └── main.jsx          # React entry point and providers
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── configs/              # Database, Cloudinary, and email configuration
│   ├── controllers/          # Request handlers and business logic
│   ├── middleware/           # Authentication and upload middleware
│   ├── models/               # Mongoose models
│   ├── routes/               # Express API routes
│   ├── server.js             # Backend entry point
│   └── package.json
└── .gitignore
```

## ⚙️ Run Locally

### Prerequisites
- Node.js and npm
- MongoDB connection string (local MongoDB or MongoDB Atlas)
- Clerk application keys and webhook configuration
- Cloudinary credentials for room image uploads
- Stripe credentials for checkout and webhook testing
- SMTP credentials if booking emails are required

### 1. Clone the repository

```bash
git clone https://github.com/info-nikhil/StayRoyale.git
cd StayRoyale
```

### 2. Install and configure the backend

```bash
cd server
npm install
```

Create `server/.env` and supply the values required by the server configuration:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

SMTP_USER=your_smtp_username
SMTP_PASSWORD=your_smtp_password
SENDER_EMAIL=your_sender_email
CURRENCY=$
```

Check the Clerk and Stripe webhook controller files for any additional signing-secret variables required by your current implementation. Never use real credentials in the README.

Start the backend:

```bash
npm run server
```

The default port is `3000`, unless `PORT` is set differently.

### 3. Install and configure the frontend

Open a second terminal:

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:3000
VITE_CURRENCY=$
```

Start the frontend:

```bash
npm run dev
```

Open the local URL printed by Vite.

### 4. Build and lint the frontend

Run these commands from `client/`:

```bash
npm run build
npm run preview
npm run lint
```

> **Security:** Do not commit `.env` files, Clerk secret keys, Stripe secret keys, Cloudinary secrets, SMTP passwords, or webhook secrets. Only expose frontend variables that are intended to be public, such as the Clerk publishable key. Store production secrets in your hosting provider's environment settings.

## 🔄 Booking Flow

1. A guest browses available rooms.
2. The guest selects a room, check-in/check-out dates, and guest count.
3. The backend checks for overlapping bookings and calculates the price from the nightly rate and number of nights.
4. A booking record is created; booking details are emailed if SMTP is configured.
5. The guest can initiate Stripe Checkout from the bookings experience.
6. The hotel owner can review bookings and manage room availability in the owner dashboard.

## ☁️ Deployment Notes

- Set `VITE_BACKEND_URL` to the deployed backend URL for production.
- Configure backend environment variables in the hosting provider.
- Verify the deployed frontend origin in Clerk settings and review the backend CORS configuration.
- Configure Clerk and Stripe webhook endpoints for the deployed backend.
- Test MongoDB connectivity, Cloudinary uploads, SMTP delivery, and Stripe test-mode checkout before production use.

## 🛣️ Potential Improvements

- Add automated tests for booking availability, pricing, authentication, and payment flows.
- Add stronger server-side validation and consistent HTTP error responses.
- Add pagination and filtering for room discovery.
- Improve booking lifecycle and payment-status handling.
- Add CI checks and deployment health monitoring.

## 👨‍💻 Author

**Nikhil Kumar**

- GitHub: [@info-nikhil](https://github.com/info-nikhil)
- Repository: [StayRoyale](https://github.com/info-nikhil/StayRoyale)

---

<div align="center">

**StayRoyale — discover your next stay.** 🏨

</div>
