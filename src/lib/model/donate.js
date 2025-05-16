// lib/model/donation.js
import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
   
  },
  phoneNumber: {
    type: String,
    required: true,
  
  },
  phoneCountryCode: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  captchaVerified: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true, 
});

const Donate = mongoose.models.donations || mongoose.model('donations', DonationSchema);

export { Donate };
