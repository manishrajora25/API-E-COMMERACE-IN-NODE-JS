import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },

  password: {
    type: String,
    // required: true,
    minlength: 6,
  },


  image: {
    type: String, 
  default: ""
  },



  // role: {
  //   type: String,
  //   enum: ["user", "admin"],
  //   default: "user",        
  // },

  cart:[{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, required: true, default: 1 },
 } ],
  wishlist:[{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
 } ],



}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;
