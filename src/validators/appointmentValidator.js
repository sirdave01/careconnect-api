import { body } from "express-validator";



export const createAppointmentValidator = [


body("patientId")

.notEmpty()

.withMessage(
"Patient required"
),


body("doctorId")

.notEmpty()

.withMessage(
"Doctor required"
),


body("appointmentDate")

.notEmpty()

.withMessage(
"Date required"
),


body("appointmentTime")

.notEmpty()

.withMessage(
"Time required"
)


];



export const updateAppointmentValidator = [

body("status")

.optional(),

body("notes")

.optional()

];