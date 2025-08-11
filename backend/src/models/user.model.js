import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    weight: {
        type: Number,
        required: true,
        min: 0,
        max: 500
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false // Exclude password from queries by default
    }
});

const User = mongoose.model("User", userSchema);

export default User;
