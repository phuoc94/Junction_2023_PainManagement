import express from 'express'

import { apiErrorHandler } from './middlewares/error.js'
import { loggingMiddleware } from './middlewares/logging.js'
import { routeNotFound } from './middlewares/routeNotFound.js'
import achievementsRoutes from './routes/achievementsRoutes.js'
import approachesRoutes from './routes/approachesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import painsRoutes from './routes/painsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'

const app = express()

// Middleware
app.use(express.json())
app.use(loggingMiddleware)

// Routes
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/pains', painsRoutes)
app.use('/api/v1/approaches', approachesRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/achievements', achievementsRoutes)

// Error Handler
app.use(apiErrorHandler)
app.use(routeNotFound)
export default app
