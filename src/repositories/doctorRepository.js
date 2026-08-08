import Doctor from "../models/Doctor.js";



// Get all doctors

export function findAllDoctors(){

    return Doctor.find();

}



// Get doctor by ID

export function findDoctorById(id){

    return Doctor.findById(id);

}



// Create doctor

export function createDoctor(data){

    return Doctor.create(data);

}



// Update doctor

export function updateDoctor(id,data){

    return Doctor.findByIdAndUpdate(

        id,

        data,

        {

            new:true

        }

    );

}



// Delete doctor

export function deleteDoctor(id){

    return Doctor.findByIdAndDelete(id);

}