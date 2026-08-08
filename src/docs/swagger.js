// =======================================
// Swagger Documentation Configuration
// =======================================
// Generates OpenAPI documentation for
// the CareConnect Healthcare API.
//
// Includes:
// - API information
// - Environment configuration
// - Authentication information
// - Data schemas
// - User endpoints
// - Patient endpoints
// - Doctor endpoints
// - Appointment endpoints
// =======================================


// =======================================
// Import Swagger Autogen
// =======================================

import swaggerAutogen from "swagger-autogen";


// =======================================
// Import Swagger Schemas
// =======================================
// These schemas describe the structure of
// the resources exposed by the API.

import { userSchema } from "./schemas/userSchema.js";

import { patientSchema } from "./schemas/patientSchema.js";

import { doctorSchema } from "./schemas/doctorSchema.js";

import { appointmentSchema } from "./schemas/appointmentSchema.js";


// =======================================
// Detect Current Environment
// =======================================

const isProduction =
    process.env.NODE_ENV === "production";


// =======================================
// Swagger Document Configuration
// =======================================

const doc = {

    // ===================================
    // API Information
    // ===================================

    info: {

        title:
            "CareConnect Healthcare API",

        description: `
REST API for the CareConnect Healthcare
Appointment and Patient Management System.

CareConnect provides API endpoints for
managing:

- Users
- Patients
- Doctors
- Appointments

---

## Authentication

CareConnect uses Passport.js for
authentication.

Google OAuth is used for user login and
Passport maintains the authenticated
session.

Before accessing protected endpoints:

1. Visit the Google authentication endpoint.

2. Sign in with your Google account.

3. Google redirects the user back to
   CareConnect.

4. Passport creates the authenticated
   session.

5. Protected endpoints can then be accessed.

---

## Authentication Endpoints

Google Login:

/api/auth/google

Google Callback:

/api/auth/google/callback

Logout:

/api/auth/logout

Current Authenticated User:

/api/auth/me

---

## Important

CareConnect currently uses Passport
session authentication.

The API does not require a JWT token
for Passport-protected endpoints.

The browser stores the Passport session
cookie after successful authentication.
`,

        version:
            "1.0.0"

    },


    // ===================================
    // Host Configuration
    // ===================================

    host: isProduction

        ? "YOUR-CARECONNECT-API.onrender.com"

        : "localhost:3000",


    // ===================================
    // Base Path
    // ===================================

    basePath: "/",


    // ===================================
    // HTTP Scheme
    // ===================================

    schemes: isProduction

        ? ["https"]

        : ["http"],


    // ===================================
    // Request Content Type
    // ===================================

    consumes: [

        "application/json"

    ],


    // ===================================
    // Response Content Type
    // ===================================

    produces: [

        "application/json"

    ],


    // ===================================
    // Swagger Definitions
    // ===================================
    // These schemas describe the structure
    // of the data used by CareConnect.

    definitions: {

        ...userSchema,

        ...patientSchema,

        ...doctorSchema,

        ...appointmentSchema

    },


    // ===================================
    // Authentication Configuration
    // ===================================
    // Passport uses a session cookie rather
    // than a JWT for authenticated requests.

    securityDefinitions: {

        sessionAuth: {

            type: "apiKey",

            name: "connect.sid",

            in: "cookie",

            description:
                "Passport authentication session cookie."

        }

    }

};


// =======================================
// Swagger Output File
// =======================================
// swagger-autogen will generate this file.

const outputFile =
    "./src/docs/swagger-output.json";


// =======================================
// Files to Scan
// =======================================
// swagger-autogen scans the route files
// for Swagger annotations.
//
// We explicitly list the four route files
// instead of relying on indirect imports.

const endpointsFiles = [

    "./app.js",
    "./src/routes/userRoutes.js",
    "./src/routes/patientRoutes.js",
    "./src/routes/doctorRoutes.js",
    "./src/routes/appointmentRoutes.js"
];


// =======================================
// Generate Swagger Documentation
// =======================================

swaggerAutogen()(
    outputFile,
    endpointsFiles,
    doc
);