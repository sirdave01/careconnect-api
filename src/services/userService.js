import {
    findAllUsers,
    findUserById,
    findUserByEmail,
    createUser,
    updateUser,
    deleteUser
} from "../repositories/userRepository.js";



// =======================================
// Get all users
// =======================================

export const getUsers = () =>
    findAllUsers();



// =======================================
// Get user by ID
// =======================================

export const getUserById = (id) =>
    findUserById(id);



// =======================================
// Register user
// =======================================

export async function registerUser(data) {

    const existingUser =
        await findUserByEmail(data.email);

    if (existingUser) {

        throw new Error(
            "User already exists."
        );

    }

    return createUser(data);

}



// =======================================
// Update user
// =======================================

export const updateExistingUser = (
    id,
    data
) =>
    updateUser(id, data);



// =======================================
// Delete user
// =======================================

export const removeUser = (id) =>
    deleteUser(id);