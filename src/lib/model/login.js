import mongoose from "mongoose";

const loginModel = new mongoose.Schema({
    username: String,
    mobile: String,
    Email: String,
    password: String,
    createprofilefor:String,
    gender:String
})

export const loginSchema = mongoose.models.userregisterDetails || mongoose.model("userregisterDetails",loginModel)