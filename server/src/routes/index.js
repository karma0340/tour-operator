import express from 'express';
import authRoutes from './auth.js';
import bookingRoutes from './booking.js';
import feedbackRoutes from './feedback.js';
import groupRoutes from './group.js';
import mealRoutes from './meal.js';
import supportRoutes from './support.js';

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/groups', groupRoutes);
router.use('/bookings', bookingRoutes);
router.use('/meals', mealRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/support', supportRoutes);

export default router;
