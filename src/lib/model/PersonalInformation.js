import mongoose from "mongoose";

const personalInformationModel = new mongoose.Schema({
    userid:String,
    personalInformation:String
})

export const PersonaldetailsSchema = mongoose.models.personaldetails || mongoose.model("personaldetails",personalInformationModel)