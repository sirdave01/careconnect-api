// =======================================
// Patient Routes
// =======================================

import { Router } from "express";

import {
    getAllPatients,
    getSinglePatient,
    createNewPatient,
    updatePatient,
    deletePatient
} from "../controllers/patientController.js";

import {
    createPatientValidator,
    updatePatientValidator
} from "../validators/patientValidator.js";

import {
    mongoIdValidator
} from "../validators/commonValidator.js";

import {
    validate
} from "../middleware/validate.js";

import {
    asyncHandler
} from "../middleware/asyncHandler.js";

const router = Router();

// =======================================
// GET /api/patients
// =======================================
/*
    #swagger.tags = ['Patients']
    #swagger.summary = 'Retrieve all patients'
    #swagger.description = 'Returns all registered patients.'
*/
router.get(
    "/",
    asyncHandler(getAllPatients)
);

// =======================================
// GET /api/patients/:id
// =======================================
/*
    #swagger.tags = ['Patients']
    #swagger.summary = 'Retrieve a single patient'
    #swagger.description = 'Returns a patient by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Patient MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getSinglePatient)
);

// =======================================
// POST /api/patients
// =======================================
/*
    #swagger.tags = ['Patients']
    #swagger.summary = 'Create a new patient'
    #swagger.description = 'Creates a new CareConnect patient profile.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Patient"
                },
                example: {
                    userId: "66a7429b3e1791b9229caa5b3",
                    firstName: "John",
                    lastName: "Doe",
                    gender: "male",
                    dateOfBirth: "1995-05-20",
                    phoneNumber: "+2348012345678",
                    address: "Lagos, Nigeria",
                    bloodType: "O+",
                    emergencyContact: "+2348098765432",
                    medicalHistory: "No known allergies"
                }
            }
        }
    }
*/
router.post(
    "/",
    createPatientValidator,
    validate,
    asyncHandler(createNewPatient)
);

// =======================================
// PUT /api/patients/:id
// =======================================
/*
    #swagger.tags = ['Patients']
    #swagger.summary = 'Update a patient'
    #swagger.description = 'Updates an existing patient.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Patient MongoDB ObjectId',
        required: true,
        type: 'string'
    }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Patient"
                },
                example: {
                    firstName: "John",
                    lastName: "Updated",
                    phoneNumber: "+2348011111111",
                    address: "Abuja, Nigeria",
                    bloodType: "A+",
                    emergencyContact: "+2348022222222",
                    medicalHistory: "Asthma"
                }
            }
        }
    }
*/
router.put(
    "/:id",
    mongoIdValidator,
    updatePatientValidator,
    validate,
    asyncHandler(updatePatient)
);

// =======================================
// DELETE /api/patients/:id
// =======================================
/*
    #swagger.tags = ['Patients']
    #swagger.summary = 'Delete a patient'
    #swagger.description = 'Deletes a patient by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Patient MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.delete(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(deletePatient)
);

export default router;