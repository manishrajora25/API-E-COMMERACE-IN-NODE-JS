import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
    lowercase: true,
  },

  password: {
    type: Number,
    // required: true,
    minlength: 6,
  },


  image: {
    type: String, // This will store URL or local file path
    default: "",  // Optional default
  },

  // wishlist: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Product",
  //   },
  // ],
  // cart: [
  //   {
  //     product: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Product",
  //     },
  //     quantity: {
  //       type: Number,
  //       default: 1,
  //     },
  //   },
  // ],
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;
