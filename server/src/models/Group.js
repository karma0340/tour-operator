import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: true
    },
    groupType: {
        type: String,
        enum: ['FIT', 'GIT', 'Transit'],
        required: true
    },
    passengers: {
        adults: {
            type: Number,
            required: true,
            min: 0
        },
        children: {
            type: Number,
            required: true,
            min: 0
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Upcoming', 'In Progress', 'Done'],
        default: 'Upcoming'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Group', groupSchema);
