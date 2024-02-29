import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    index: Number,
    name: String,
    isActive: Boolean,
    registered: Date,
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female', 'other'], // Adjust as necessary
    },
    eyeColor: String,
    favoriteFruit: String,
    company: {
        title: String,
        email: String,
        phone: String
    },
    location: {
        country: String,
        address: String
    },
    tags: [String],
    ViewedByYou: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    ViewedYou: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    Shortlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shortlist' }]
})
export const userdetails = mongoose.models.users || mongoose.model("users",userSchema)