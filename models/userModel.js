import mongoose from 'mongoose';

// STEP1 => We are creating Schema here
// we are directly using here [Schema & model] from mongoose
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
        maxlength: 50
    },
    weight: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// STEP2 => We are creating Model using the Schema
// Model name will be "User" and collection will be "users"
const UserModel = mongoose.model('Players', UserSchema);

export default UserModel;
