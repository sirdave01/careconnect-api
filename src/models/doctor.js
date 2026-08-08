// =======================================
// Doctor Model
// =======================================
// Stores healthcare provider information.
// =======================================


import mongoose from "mongoose";



const doctorSchema = new mongoose.Schema(

    {


        // Connected user account

        userId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required:true

        },



        // Doctor first name

        firstName: {

            type:String,

            required:true,

            trim:true

        },



        // Doctor last name

        lastName: {

            type:String,

            required:true,

            trim:true

        },



        // Medical specialization

        specialization: {

            type:String,

            required:true,

            trim:true

        },



        // Professional license

        licenseNumber: {

            type:String,

            required:true,

            unique:true

        },



        // Experience years

        yearsOfExperience: {

            type:Number,

            required:true

        },



        // Hospital/clinic

        hospital: {

            type:String,

            required:true

        },



        // Contact

        phoneNumber: {

            type:String,

            required:true

        },



        // Availability schedule

        availability: {

            type:String,

            default:"Available"

        }


    },


    {

        timestamps:true

    }


);



export default mongoose.model(

    "Doctor",

    doctorSchema

);