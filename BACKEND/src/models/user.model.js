import mongoose from "mongoose";

// SCHEMA para el usuario
const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

export const userModel = mongoose.model("user", userSchema);