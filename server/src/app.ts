import express from 'express';

import { apiErrorHandler } from './middlewares/error.js';
import { loggingMiddleware } from './middlewares/logging.js';
import { routeNotFound } from './middlewares/routeNotFound.js';
import usersRoutes from './routes/usersRoutes.js';
import authRoutes from './routes/authRoutes.js';


const app = express()

// Middleware
app.use(express.json())
app.use(loggingMiddleware)

// Routes
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/auth', authRoutes)

// Error Handler
app.use(apiErrorHandler)
app.use(routeNotFound)
export default app
