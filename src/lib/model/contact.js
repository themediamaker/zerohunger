const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true },
  phoneCountryCode: String,
  phoneNumber: String,
  message: { type: String, required: true },
  captchaVerified: Boolean
}, {
  timestamps: true  
});

const Contactuser = mongoose.models.Contacts || mongoose.model('Contacts', contactSchema);

module.exports = { Contactuser };
