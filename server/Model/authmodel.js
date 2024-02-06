// signupModel.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
   
  },
  password: {
    type: String,
    required: true,
   
  },
  phonenumber: {
    type: String,
    required: true,
 
 },
});

const Signup = mongoose.model('Signup', signupSchema);

export default Signup
