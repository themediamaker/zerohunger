import mongoose from "mongoose";

const ViwedProfile = new mongoose.Schema({
    userid:{type:String,default:''},
    profileid:{type:String,default:''},
    status:{type:String,default:'1'},
    sendrequesttime:{type: Date, default: Date.now}
})

export const ViwedProfileSchema = mongoose.models.viwedprofilesdatas || mongoose.model("viwedprofilesdatas",ViwedProfile)