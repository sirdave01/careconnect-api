import { body } from "express-validator";

export const createUserValidator = [

    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("First name must be between 2 and 50 characters"),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("Last name must be between 2 and 50 characters"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),
    
    body("role")
        .optional()
        .isIn(["patient", "doctor"])
        .withMessage("Role must be either patient or doctor"),

    body("googleId")
        .optional()
        .isString()
        .withMessage("googleId must be a string"),

    body("profileImage")
        .optional()
        .isURL()
        .withMessage("profileImage must be a valid URL")
];

export const updateUserValidator = [

    body("first_name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 }),

    body("last_name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 }),

    body("email")
        .optional()
        .isEmail()
        .normalizeEmail(),
    
    body("role")
        .optional()
        .isIn(["patient", "doctor"])
        .withMessage("Role must be either patient or doctor"),

    body("profileImage")
        .optional()
        .isURL()
        .withMessage("profileImage must be a valid URL")

];