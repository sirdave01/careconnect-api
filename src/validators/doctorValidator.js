import {

    body

} from "express-validator";



export const createDoctorValidator = [


    body("firstName")

        .notEmpty()

        .withMessage(
            "First name required"
        ),



    body("lastName")

        .notEmpty()

        .withMessage(
            "Last name required"
        ),



    body("specialization")

        .notEmpty()

        .withMessage(
            "Specialization required"
        ),



    body("licenseNumber")

        .notEmpty()

        .withMessage(
            "License number required"
        )

];




export const updateDoctorValidator = [

    body("specialization")

        .optional(),

    body("hospital")

        .optional()

];