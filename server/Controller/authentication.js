import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Signup from "../Model/authmodel.js"; // Assuming your model is in the same directory

export const signup = async (req, res) => {
  try {
    const { name, email, password, phonenumber } = req.body;
    
    // Check if the email or phone number is already registered
    const existingUser = await Signup.findOne({
      $or: [{ email }, { phonenumber }],
    });
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or phone number already exists.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser =  new Signup({
      name,
      email,
      password: hashedPassword,
      phonenumber,
    });
   
    // Save the user to the database
    await newUser.save();
  
    return res.status(201).json({ message: "Successfully Sign up" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// loginController.js



export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await Signup.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Please Check your credentials' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Please Check your credentials' });
    }


    return res.status(200).json({message:"Login Successfully",userId:user._id});
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



