// =======================================
// MongoDB Connection
// =======================================
// Handles connection between the API
// and MongoDB using Mongoose.
// =======================================


import mongoose from "mongoose";

import { config } from "../config/config.js";



// =======================================
// Connect Database
// =======================================

export async function connectDatabase(){


    try {


        await mongoose.connect(

            config.mongodbUri,

            {

                // Uses your careConnect database
                dbName: config.databaseName

            }

        );


        console.log(
            "✅ MongoDB connected successfully"
        );


    } catch(error){


        console.error(
            "❌ MongoDB connection failed:",
            error.message
        );


        process.exit(1);


    }


}



// =======================================
// Check Database Connection
// =======================================

export async function checkDatabaseConnection(){


    try{


        await mongoose.connection.db.command({

            ping:1

        });


        return true;


    }catch(error){


        return false;


    }


}