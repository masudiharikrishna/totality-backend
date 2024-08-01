const Property = require('../models/Property');

const createProperty = async (req, res) => {
  try {
    const {
      title, description, address, price, currency, bedrooms, bathrooms, squareFeet, availableFrom, amenities, images, contact
    } = req.body;

    const property = new Property({
      title,
      description,
      address,
      price,
      currency,
      bedrooms,
      bathrooms,
      squareFeet,
      availableFrom,
      amenities,
      images,
      contact
    });
    
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllProperties = async (req, res) => {
  try {
    const filters = {};
    
    if (req.query.city) {
      filters['address.city'] = req.query.city;
    }
    if (req.query.price) {
      filters.price = { $lte: parseInt(req.query.price, 10) };
    }
    if (req.query.bedrooms) {
      filters.bedrooms = parseInt(req.query.bedrooms, 10);
    }
    if (req.query.bathrooms) {
      filters.bathrooms = parseInt(req.query.bathrooms, 10);
    }
    if (req.query.availableFrom) {
      filters.availableFrom = { $gte: new Date(req.query.availableFrom) };
    }

    const properties = await Property.find(filters);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProperty,
  getAllProperties
};
