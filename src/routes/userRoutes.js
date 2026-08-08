// =======================================
// User Routes
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
// =======================================
/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Retrieve a single user'
    #swagger.description = 'Returns a user by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'User MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getUser)
);

// =======================================
// POST /api/users
// =======================================
/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Create a new user'
    #swagger.description = 'Creates a new CareConnect user (normally handled by Google OAuth).'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/User"
                },
                example: {
                    firstName: "David",
                    lastName: "Caleb",
                    email: "david@example.com",
                    role: "patient",
                    googleId: "112233445566778899",
                    profileImage: "https://lh3.googleusercontent.com/a/..."
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
// PUT /api/users/:id   ← Protected
// =======================================
/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user'
    #swagger.description = 'Updates an existing user. Requires authentication.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'User MongoDB ObjectId',
        required: true,
        type: 'string'
    }
    #swagger.security = [{
        sessionAuth: []
    }]
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/User"
                },
                example: {
                    firstName: "Updated",
                    lastName: "Name",
                    role: "doctor",
                    profileImage: "https://example.com/new-avatar.jpg"
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
// DELETE /api/users/:id   ← Protected
// =======================================
/*
    #swagger.tags = ['Users']
    #swagger.summary = 'Delete a user'
    #swagger.description = 'Deletes a user by MongoDB ObjectId. Requires authentication.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'User MongoDB ObjectId',
        required: true,
        type: 'string'
    }
    #swagger.security = [{
        sessionAuth: []
    }]
*/
router.delete(
    "/:id",
    isAuthenticated,
    mongoIdValidator,
    validate,
    asyncHandler(deleteUser)
);

export default router;