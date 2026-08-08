// =======================================
// Patient Validators
// =======================================


import {

    body

} from "express-validator";




// Create patient validation

export const createPatientValidator = [


    body("firstName")

        .trim()

        .notEmpty()

        .withMessage(
            "First name is required"
        ),



    body("lastName")

        .trim()

        .notEmpty()

        .withMessage(
            "Last name is required"
        ),



    body("gender")

        .isIn([
            "male",
            "female",
            "other"
        ])

        .withMessage(
            "Invalid gender"
        ),



    body("dateOfBirth")

        .notEmpty()

        .withMessage(
            "Date of birth required"
        ),



    body("phoneNumber")

        .notEmpty()

        .withMessage(
            "Phone number required"
        )

];





// Update validation

export const updatePatientValidator = [

    body("firstName")
        .optional()
        .trim(),


    body("lastName")
        .optional()
        .trim(),


    body("phoneNumber")
        .optional()

];