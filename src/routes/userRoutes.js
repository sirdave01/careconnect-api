// =======================================
// User Routes
// =======================================
// Defines all HTTP endpoints related to
// user management.
// =======================================

import { Router } from "express";

import {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

import {
    createUserValidator,
    updateUserValidator
} from "../validators/userValidator.js";

import {
    mongoIdValidator
} from "../validators/commonValidator.js";

import {
    validate
} from "../middleware/validate.js";

import {
    isAuthenticated
} from "../middleware/authenticate.js";

import {
    asyncHandler
} from "../middleware/asyncHandler.js";

const router = Router();



// =======================================
// GET /api/users
// Retrieve all users
// =======================================

/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Retrieve all users'
    #swagger.description = 'Returns all registered users.'
*/

router.get(
    "/",
    asyncHandler(getAllUsers)
);



// =======================================
// GET /api/users/:id
// Retrieve one user
// =======================================

/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Retrieve a single user'
    #swagger.description = 'Returns a user by MongoDB ObjectId.'
*/

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getUser)
);



// =======================================
// POST /api/users
// Create new user
// =======================================

/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Create a new user'
    #swagger.description = 'Creates a new CareConnect user.'

    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    firstName: "Caleb",
                    lastName: "Osigwe",
                    email: "caleb@example.com",
                    password: "password123",
                    role: "user"
                }
            }
        }
    }
*/

router.post(
    "/",
    createUserValidator,
    validate,
    asyncHandler(createUser)
);



// =======================================
// PUT /api/users/:id
// Update user
// =======================================

/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user'
    #swagger.description = 'Updates an existing user.'

    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    firstName: "Updated",
                    lastName: "User",
                    email: "updated@example.com",
                    role: "doctor"
                }
            }
        }
    }
*/

router.put(
    "/:id",
    isAuthenticated,
    mongoIdValidator,
    updateUserValidator,
    validate,
    asyncHandler(updateUser)
);



// =======================================
// DELETE /api/users/:id
// Delete user
// =======================================

/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Delete a user'
    #swagger.description = 'Deletes a user by MongoDB ObjectId.'
*/

router.delete(
    "/:id",
    isAuthenticated,
    mongoIdValidator,
    validate,
    asyncHandler(deleteUser)
);

export default router;