import mongoose from 'mongoose';

const mealTrackingSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    meals: [{
        type: {
            type: String,
            enum: ['breakfast', 'lunch', 'dinner'],
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Delivered', 'Issue Reported'],
            default: 'Pending'
        },
        assignedStaff: {
            type: String,
            required: true
        },
        deliveryTime: Date,
        issue: {
            description: String,
            reportedAt: Date,
            status: {
                type: String,
                enum: ['Open', 'In Progress', 'Resolved'],
                default: 'Open'
            }
        }
    }]
});

export default mongoose.model('MealTracking', mealTrackingSchema);
