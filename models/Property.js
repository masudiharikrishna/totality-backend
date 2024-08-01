const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: addressSchema, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  squareFeet: { type: Number, required: true },
  availableFrom: { type: Date, required: true },
  amenities: { type: [String], required: true },
  images: { type: [String], required: true },
  contact: { type: contactSchema, required: true }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
