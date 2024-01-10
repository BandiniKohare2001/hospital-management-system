import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import User from "./models/User.js";
// import Product from "./models/Product.js";
dotenv.config();

const app = express();
app.use(express.json());


const connectMongoDB = async () => {
  const conn = await mongoose.connect(process.env.ECOMMERCE_URI)

  if (conn) {
    console.log('MongoDB connected successfully.');
  }
};
connectMongoDB();
// --------------user login-----------------
app.get('/login', async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({
    email: email,
    password: password
  })

  res.json({
    success: true,
    data: findUser,
    message: 'login Successfully',
  })
})

// -------------user signup-----------------------
app.post('/signup', async (req, res) => {
  const { city, email, hospitalname , password, confirmpassword } = req.body;
  try {
    const obj = new User({
      city: city,
      email: email,
      hospitalname: hospitalname,
      password: password,
      confirmpassword: confirmpassword
    })

    const saveUser = await obj.save();


    res.json({
      success: true,
      data: saveUser,
      message: 'Sign up Successfully',
    })

  } catch (e) {
    res.json({
      success: false,

      message: e.message
    })

  }
})





app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
