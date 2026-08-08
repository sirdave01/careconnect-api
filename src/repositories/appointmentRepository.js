import Appointment from "../models/Appointment.js";



export function findAllAppointments(){

    return Appointment.find()

        .populate("patientId")

        .populate("doctorId");

}



export function findAppointmentById(id){

    return Appointment.findById(id)

        .populate("patientId")

        .populate("doctorId");

}



export function createAppointment(data){

    return Appointment.create(data);

}



export function updateAppointment(id,data){

    return Appointment.findByIdAndUpdate(

        id,

        data,

        {

            new:true

        }

    );

}



export function deleteAppointment(id){

    return Appointment.findByIdAndDelete(id);

}