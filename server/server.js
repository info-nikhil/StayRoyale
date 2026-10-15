import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

await connectDB();

const app = express()
app.use(cors())

// // Middleware
// app.use(express.json())
// app.use(clerkMiddleware())

// // API to listen Clerk Webhook
// app.use("/api/clerk", clerkWebhooks);

app.post(
    "/api/clerk",
    express.raw({ type: "application/json" }),
    clerkWebhooks
);

app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('API is Working'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));