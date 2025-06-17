import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    ratings: {
        food: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        hygiene: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        timeliness: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
    },
    comments: String,
    overallRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

export default mongoose.model('Feedback', feedbackSchema);
