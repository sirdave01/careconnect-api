import {

    findAllDoctors,

    findDoctorById,

    createDoctor,

    updateDoctor,

    deleteDoctor

} from "../repositories/doctorRepository.js";




// Get doctors

export async function getDoctors(){

    return findAllDoctors();

}



// Get doctor

export async function getDoctor(id){

    return findDoctorById(id);

}



// Create doctor

export async function registerDoctor(data){

    return createDoctor(data);

}



// Update doctor

export async function modifyDoctor(id,data){

    return updateDoctor(

        id,

        data

    );

}



// Delete doctor

export async function removeDoctor(id){

    return deleteDoctor(id);

}