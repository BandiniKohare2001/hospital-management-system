import mongoose, {Schema, model} from "mongoose";

const userSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
       

    },
    hospitalname: {
        type: String,
        required: true,
      
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true
    },
 
   
  },{
    timestamps: true,
  });
  
  const User = model('User', userSchema);
  
  export default User;