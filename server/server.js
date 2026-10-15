import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

dotenv.config();

const app = express()
app.use(cors())

// API to listen Clerk Webhook
app.use("/api/clerk", clerkWebhooks);

// Middleware
app.use(express.json())
app.use(clerkMiddleware())

connectDB();

app.get('/', (req, res) => res.send('API is Working'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));