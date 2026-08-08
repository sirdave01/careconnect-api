import { Router } from "express";

import {
    getAllDoctors,
    getSingleDoctor,
    createNewDoctor,
    updateDoctor,
    deleteDoctor
} from "../controllers/doctorController.js";

import {
    createDoctorValidator,
    updateDoctorValidator
} from "../validators/doctorValidator.js";

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
// GET /api/doctors
// =======================================
/*
    #swagger.tags = ['Doctors']
    #swagger.summary = 'Retrieve all doctors'
    #swagger.description = 'Returns all registered doctors.'
*/
router.get(
    "/",
    asyncHandler(getAllDoctors)
);

// =======================================
// GET /api/doctors/:id
// =======================================
/*
    #swagger.tags = ['Doctors']
    #swagger.summary = 'Retrieve a single doctor'
    #swagger.description = 'Returns a doctor by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Doctor MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getSingleDoctor)
);

// =======================================
// POST /api/doctors
// =======================================
/*
    #swagger.tags = ['Doctors']
    #swagger.summary = 'Create a new doctor'
    #swagger.description = 'Creates a new CareConnect doctor profile.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Doctor"
                },
                example: {
                    userId: "66a7429b3e1791b9229caa5b3",
                    firstName: "Sarah",
                    lastName: "Williams",
                    specialization: "Cardiology",
                    licenseNumber: "MD-123456",
                    yearsOfExperience: 8,
                    hospital: "Lagos University Teaching Hospital",
                    phoneNumber: "+2348012345678",
                    availability: "Available"
                }
            }
        }
    }
*/
router.post(
    "/",
    createDoctorValidator,
    validate,
    asyncHandler(createNewDoctor)
);

// =======================================
// PUT /api/doctors/:id
// =======================================
/*
    #swagger.tags = ['Doctors']
    #swagger.summary = 'Update a doctor'
    #swagger.description = 'Updates an existing doctor.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Doctor MongoDB ObjectId',
        required: true,
        type: 'string'
    }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Doctor"
                },
                example: {
                    specialization: "Neurology",
                    yearsOfExperience: 10,
                    hospital: "National Hospital Abuja",
                    phoneNumber: "+2348099999999",
                    availability: "On Leave"
                }
            }
        }
    }
*/
router.put(
    "/:id",
    mongoIdValidator,
    updateDoctorValidator,
    validate,
    asyncHandler(updateDoctor)
);

// =======================================
// DELETE /api/doctors/:id
// =======================================
/*
    #swagger.tags = ['Doctors']
    #swagger.summary = 'Delete a doctor'
    #swagger.description = 'Deletes a doctor by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Doctor MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.delete(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(deleteDoctor)
);

export default router;