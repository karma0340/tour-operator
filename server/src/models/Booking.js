import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    hotels: [{
        city: {
            type: String,
            enum: ['Makkah', 'Madinah'],
            required: true
        },
        distanceFromMosque: {
            type: Number,
            required: true
        },
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
        serviceStartDate: {
            type: Date,
            required: true
        },
        serviceEndDate: {
            type: Date,
            required: true
        }
    }],
    mealPlan: {
        type: {
            type: String,
            enum: ['Budget', 'Semi-Deluxe', 'Deluxe', 'Super Deluxe', 'Premium'],
            required: true
        },
        serviceType: {
            type: String,
            enum: ['Buffet', 'Hotel'],
            required: true
        },
        cuisine: {
            country: String,
            state: String
        },
        ratePerMeal: {
            type: Number,
            required: true
        }
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Confirmed'],
        default: 'Pending'
    },
    bookingStatus: {
        type: String,
        enum: ['Confirmed', 'Pending'],
        default: 'Pending'
    },
    paymentReceipt: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Booking', bookingSchema);
