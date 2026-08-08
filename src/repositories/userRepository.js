import User from "../models/user.js";

// =======================================
// Get all users
// =======================================

export const findAllUsers = () => User.find();



// =======================================
// Get user by ID
// =======================================

export const findUserById = (id) =>
    User.findById(id);



// =======================================
// Get user by email
// =======================================

export const findUserByEmail = (email) =>
    User.findOne({ email });



// =======================================
// Create user
// =======================================

export const createUser = (data) =>
    User.create(data);



// =======================================
// Update user
// =======================================

export const updateUser = (id, data) =>
    User.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );



// =======================================
// Delete user
// =======================================

export const deleteUser = (id) =>
    User.findByIdAndDelete(id);