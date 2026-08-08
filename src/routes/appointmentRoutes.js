import { Router } from 'express';

import {
    getAllAppointments, 
    getSingleAppointment, 
    createAppointment, 
    updateAppointment, 
    deleteAppointment
} from '../controllers/appointmentController.js';

import {
    createAppointmentValidator,
    updateAppointmentValidator
} from '../validators/appointmentValidator.js';

import {
    mongoIdValidator
} from '../validators/commonValidator.js';

import {
    validate
} from '../middleware/validate.js';

import { 
    asyncHandler 
} from '../middleware/asyncHandler.js';

const router = Router();

// =======================================
// GET /api/appointments
// =======================================
/*
    #swagger.tags = ['Appointments']
    #swagger.summary = 'Retrieve all appointments'
    #swagger.description = 'Returns all registered appointments.'
*/
router.get(
    '/',
    asyncHandler(getAllAppointments)
);

// =======================================
// GET /api/appointments/:id
// =======================================
/*
    #swagger.tags = ['Appointments']
    #swagger.summary = 'Retrieve a single appointment'
    #swagger.description = 'Returns an appointment by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Appointment MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.get(
    '/:id',
    mongoIdValidator,
    validate,
    asyncHandler(getSingleAppointment)
);

// =======================================
// POST /api/appointments
// =======================================
/*
    #swagger.tags = ['Appointments']
    #swagger.summary = 'Create a new appointment'
    #swagger.description = 'Creates a new CareConnect appointment.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Appointment"
                },
                example: {
                    patientId: "66a7429b3e1791b9229caa5b3",
                    doctorId: "66a7429b3e1791b9229caa5b4",
                    appointmentDate: "2026-08-15",
                    appointmentTime: "10:30",
                    reason: "Routine medical consultation",
                    status: "pending",
                    notes: "Patient requested morning appointment"
                }
            }
        }
    }
*/
router.post(
    '/',
    createAppointmentValidator,
    validate,
    asyncHandler(createAppointment)
);

// =======================================
// PUT /api/appointments/:id
// =======================================
/*
    #swagger.tags = ['Appointments']
    #swagger.summary = 'Update an appointment'
    #swagger.description = 'Updates an existing appointment.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Appointment MongoDB ObjectId',
        required: true,
        type: 'string'
    }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Appointment"
                },
                example: {
                    appointmentDate: "2026-08-20",
                    appointmentTime: "14:00",
                    status: "approved",
                    notes: "Confirmed by doctor"
                }
            }
        }
    }
*/
router.put(
    '/:id',
    mongoIdValidator,
    updateAppointmentValidator,
    validate,
    asyncHandler(updateAppointment)
);

// =======================================
// DELETE /api/appointments/:id
// =======================================
/*
    #swagger.tags = ['Appointments']
    #swagger.summary = 'Delete an appointment'
    #swagger.description = 'Deletes an appointment by MongoDB ObjectId.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Appointment MongoDB ObjectId',
        required: true,
        type: 'string'
    }
*/
router.delete(
    '/:id',
    mongoIdValidator,
    validate,
    asyncHandler(deleteAppointment)
);

export default router;