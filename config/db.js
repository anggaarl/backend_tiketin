import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://angga:angga123@cluster0.pyjsk.mongodb.net/tiketin').then(()=>console.log("DB Connected"));
}