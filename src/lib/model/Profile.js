import mongoose from "mongoose";

const profileModel = new mongoose.Schema({
    userid:String,
    username:String,
    dateofbirth:date,
    height:String,
    caste:String,
    city:String,
    state:String,
    country:String,
    education:String,
    profession:String
})

export const ProfileSchema = mongoose.models.profiledetails || mongoose.model("profiledetails",profileModel)