const mongoose = require("mongoose");

// Define the address schema
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

// Define the user schema
const user_schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
   
    required: true,
  },
  mobile: {
    type: Number,
   
    required: true,
  },
  address: {
    type: addressSchema,
    required: true
  },
  gender:{
    type:String,
    required:true
  },
});

// Create the user authentication model
const userAuthmodel = mongoose.model('User', user_schema)

// Export the user authentication model
module.exports = {userAuthmodel}







