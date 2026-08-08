// =======================================
// Patient Model
// =======================================
// Defines the MongoDB structure for
// patient profiles.
// =======================================


import mongoose from "mongoose";



const patientSchema = new mongoose.Schema(


    {


        // Reference to authenticated user

        userId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },



        // Patient first name

        firstName: {

            type: String,

            required: true,

            trim: true

        },



        // Patient last name

        lastName: {

            type: String,

            required: true,

            trim: true

        },



        // Gender information

        gender: {

            type: String,

            required: true,

            enum: [
                "male",
                "female",
                "other"
            ]

        },



        // Date of birth

        dateOfBirth: {

            type: Date,

            required: true

        },



        // Contact number

        phoneNumber: {

            type: String,

            required: true

        },



        // Residential address

        address: {

            type: String,

            required: true

        },



        // Blood group

        bloodType: {

            type: String,

            required: true

        },



        // Emergency contact information

        emergencyContact: {

            type: String,

            required: true

        },



        // Previous medical information

        medicalHistory: {

            type: String,

            default: ""

        }


    },


    {


        timestamps:true

    }


);





export default mongoose.model(

    "Patient",

    patientSchema

);