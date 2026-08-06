import {

    getUsers,
    getUserById,
    registerUser,
    updateExistingUser,
    removeUser

} from "../services/userService.js";

import {

    successResponse,
    createdResponse,
    notFoundResponse

} from "../utils/response.js";



// =======================================
// GET ALL USERS
// =======================================

export async function getAllUsers(req, res) {

    const users =
        await getUsers();

    return successResponse(

        res,

        "Users retrieved successfully.",

        users

    );

}



// =======================================
// GET USER
// =======================================

export async function getUser(req, res) {

    const user =
        await getUserById(
            req.params.id
        );

    if (!user) {

        return notFoundResponse(

            res,

            "User not found."

        );

    }

    return successResponse(

        res,

        "User retrieved successfully.",

        user

    );

}



// =======================================
// CREATE USER
// =======================================

export async function createUser(req, res) {

    const user =
        await registerUser(
            req.body
        );

    return createdResponse(

        res,

        "User created successfully.",

        user

    );

}



// =======================================
// UPDATE USER
// =======================================

export async function updateUser(req, res) {

    const user =
        await updateExistingUser(

            req.params.id,

            req.body

        );

    if (!user) {

        return notFoundResponse(

            res,

            "User not found."

        );

    }

    return successResponse(

        res,

        "User updated successfully.",

        user

    );

}



// =======================================
// DELETE USER
// =======================================

export async function deleteUser(req, res) {

    const user =
        await removeUser(
            req.params.id
        );

    if (!user) {

        return notFoundResponse(

            res,

            "User not found."

        );

    }

    return successResponse(

        res,

        "User deleted successfully."

    );

}