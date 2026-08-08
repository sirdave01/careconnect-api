// =======================================
// Patient Repository
// =======================================
// Handles direct database operations.
// =======================================


import Patient from "../models/patient.js";




// Get all patients

export function findAllPatients(){

    return Patient.find();

}





// Get patient by ID

export function findPatientById(id){

    return Patient.findById(id);

}





// Create patient

export function createPatient(data){

    return Patient.create(data);

}





// Update patient

export function updatePatient(id,data){

    return Patient.findByIdAndUpdate(

        id,

        data,

        {

            new:true

        }

    );

}





// Delete patient

export function deletePatient(id){

    return Patient.findByIdAndDelete(id);

}