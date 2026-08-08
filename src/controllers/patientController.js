// =======================================
// Patient Controller
// =======================================
// Handles HTTP request/response logic.
// =======================================


import {

    getPatients,

    getPatient,

    registerPatient,

    modifyPatient,

    removePatient

} from "../services/patientService.js";



import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";





// =======================================
// Get all patients
// =======================================


export async function getAllPatients(req,res){


    const patients = await getPatients();



    return successResponse(

        res,

        "Patients retrieved",

        patients

    );

}






// =======================================
// Get patient by ID
// =======================================


export async function getSinglePatient(req,res){


    const patient = await getPatient(

        req.params.id

    );



    if(!patient){


        return notFoundResponse(

            res,

            "Patient not found"

        );

    }



    return successResponse(

        res,

        "Patient retrieved",

        patient

    );

}






// =======================================
// Create patient
// =======================================


export async function createNewPatient(req,res){


    const patient = await registerPatient(

        req.body

    );



    return createdResponse(

        res,

        "Patient created",

        patient

    );

}






// =======================================
// Update patient
// =======================================


export async function updatePatient(req,res){


    const patient = await modifyPatient(

        req.params.id,

        req.body

    );



    if(!patient){


        return notFoundResponse(

            res,

            "Patient not found"

        );

    }



    return successResponse(

        res,

        "Patient updated",

        patient

    );

}






// =======================================
// Delete patient
// =======================================


export async function deletePatient(req,res){


    const patient = await removePatient(

        req.params.id

    );



    if(!patient){


        return notFoundResponse(

            res,

            "Patient not found"

        );

    }



    return successResponse(

        res,

        "Patient deleted",

        patient

    );

}