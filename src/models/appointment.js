import mongoose from "mongoose";



const appointmentSchema = new mongoose.Schema(

{

    patientId: {

        type:mongoose.Schema.Types.ObjectId,

        ref:"Patient",

        required:true

    },


    doctorId: {

        type:mongoose.Schema.Types.ObjectId,

        ref:"Doctor",

        required:true

    },


    appointmentDate: {

        type:Date,

        required:true

    },


    appointmentTime: {

        type:String,

        required:true

    },


    reason: {

        type:String,

        required:true

    },


    status: {

        type:String,

        enum:[

            "pending",

            "approved",

            "completed",

            "cancelled"

        ],

        default:"pending"

    },


    notes: {

        type:String,

        default:""

    }


},


{

    timestamps:true

}


);



export default mongoose.model(

    "Appointment",

    appointmentSchema

);