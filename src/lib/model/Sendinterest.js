import mongoose from "mongoose";

const sendinterest = new mongoose.Schema({
    userid:{type:String,default:''},
    profileid:{type:String,default:''},
    member:{type:String,default:'free'},
    status:{type:String,default:'-1'},
    showprofile:{type:String,default:true},
    rights:{type:String,default:true},
    sendrequesttime:{type: Date, default: Date.now}
})

export const SendInterestSchema = mongoose.models.sendinterests || mongoose.model("sendinterests",sendinterest)