
import mongoose from "mongoose";
const helpListuser = new mongoose.Schema({
 

name: {
    type: String,
    default: '',
  },
  matrimonyID: {
    type: String,
    default: '',
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  category: {
    type: String,
    default: '',
  },
  feedback: {
    type: String,
    default: '',
  },})
  export const HelpListUserSchema = mongoose.models.helplistdatas || mongoose.model("helplistdatas", helpListuser)