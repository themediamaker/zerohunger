import mongoose from "mongoose";

const helpList = new mongoose.Schema({
    userid: { type: String, default: '' },
    name: {type: String,default: '' },
    organization: { type: String, default: ''},
    businessNature: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    partnershipDetails: {
        type: String,
        default: ''
    },


 


})

export const HelpListSchema = mongoose.models.helplistdatas || mongoose.model("helplistdatas", helpList)