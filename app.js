// =======================================
// Express Application Setup
// =======================================


import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";

import cookieParser from "cookie-parser";

import session from "express-session";

import passport from "passport";


// Load Passport configuration
import "./src/config/passport.js";

// swagger documention imports
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./src/docs/swagger-output.json" with { type: "json" };

// Import routes
import userRoutes from "./src/routes/userRoutes.js";

import patientRoutes from "./src/routes/patientRoutes.js";

import doctorRoutes from "./src/routes/doctorRoutes.js";

import appointmentRoutes from "./src/routes/appointmentRoutes.js";

import authRoutes from "./src/routes/authRoutes.js";


// Import middleware
import {
    errorHandler
} from "./src/middleware/errorHandler.js";



// Import database checker
import {
    checkDatabaseConnection
} from "./src/database/mongodb.js";



// Import config
import {
    config
} from "./src/config/config.js";



const app = express();



// =======================================
// Global Middleware
// =======================================



// Security headers

app.use(
    helmet()
);



// Allow frontend communication

app.use(
    cors({

        origin: true,

        credentials: true

    })
);



// Log HTTP requests

app.use(
    morgan("dev")
);



// Parse JSON bodies

app.use(
    express.json()
);



// Parse cookies

app.use(
    cookieParser()
);





// =======================================
// Session Configuration
// =======================================


app.use(

    session({

        secret: config.sessionSecret,

        resave: false,

        saveUninitialized: false,

        cookie: {

            maxAge: 1000 * 60 * 60 * 24,

            httpOnly: true,

            secure: false

        }

    })

);




// =======================================
// Passport Configuration
// =======================================


app.use(

    passport.initialize()

);



app.use(

    passport.session()

);


// =======================================
// Swagger Documentation
// =======================================

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);


// =======================================
// API Routes
// =======================================

// =======================================
// Authentication Routes
// =======================================

app.use(
    "/api/auth",
    authRoutes
);


app.use(

    "/api/users",

    userRoutes

);

app.use(

    "/api/patients",

    patientRoutes

);

app.use(

    "/api/doctors",

    doctorRoutes

);

app.use(

    "/api/appointments",

    appointmentRoutes
    
);



// =======================================
// Health Check Route
// =======================================


app.get(

    "/",

    (req,res)=>{


        res.json({

            message:
            "CareConnect API running"

        });


    }

);



app.get(

    "/health",

    (req,res)=>{


        res.status(200).json({

            success:true,

            message:
            "Server healthy"

        });


    }

);





// =======================================
// DATABASE CHECK
// =======================================


app.get(

    "/database-check",

    async(req,res)=>{


        const status =

            await checkDatabaseConnection();



        res.json({

            databaseConnected:
            status

        });


    }

);





// =======================================
// Error Handler
// =======================================


app.use(

    errorHandler

);



export default app;