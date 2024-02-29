import mongoose from "mongoose";

const shortlist = new mongoose.Schema({
    userid:{type:String,default:''},
    profileid:{type:String,default:''},
    status:{type:String,default:'1'},
    sendrequesttime:{type: Date, default: Date.now}
})

export const ShortlistSchema = mongoose.models.shortlistsdatas || mongoose.model("shortlistsdatas",shortlist)