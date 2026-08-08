// =======================================
// Patient Service
// =======================================
// Contains business logic.
// =======================================


import {

    findAllPatients,

    findPatientById,

    createPatient,

    updatePatient,

    deletePatient

} from "../repositories/patientRepository.js";





// Get patients

export async function getPatients(){

    return findAllPatients();

}





// Get patient

export async function getPatient(id){

    return findPatientById(id);

}





// Register patient

export async function registerPatient(data){

    return createPatient(data);

}





// Update patient

export async function modifyPatient(id,data){

    return updatePatient(

        id,

        data

    );

}





// Remove patient

export async function removePatient(id){

    return deletePatient(id);

}