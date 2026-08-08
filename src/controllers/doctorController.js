import {

    getDoctors,

    getDoctor,

    registerDoctor,

    modifyDoctor,

    removeDoctor

} from "../services/doctorService.js";


import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";




// Get all doctors

export async function getAllDoctors(req,res){


    const doctors = await getDoctors();



    return successResponse(

        res,

        "Doctors retrieved",

        doctors

    );

}





// Get doctor

export async function getSingleDoctor(req,res){


    const doctor = await getDoctor(

        req.params.id

    );



    if(!doctor){

        return notFoundResponse(

            res,

            "Doctor not found"

        );

    }



    return successResponse(

        res,

        "Doctor retrieved",

        doctor

    );

}





// Create doctor

export async function createNewDoctor(req,res){


    const doctor = await registerDoctor(

        req.body

    );



    return createdResponse(

        res,

        "Doctor created",

        doctor

    );

}





// Update doctor

export async function updateDoctor(req,res){


    const doctor = await modifyDoctor(

        req.params.id,

        req.body

    );



    if(!doctor){

        return notFoundResponse(

            res,

            "Doctor not found"

        );

    }



    return successResponse(

        res,

        "Doctor updated",

        doctor

    );

}





// Delete doctor

export async function deleteDoctor(req,res){


    const doctor = await removeDoctor(

        req.params.id

    );



    if(!doctor){

        return notFoundResponse(

            res,

            "Doctor not found"

        );

    }



    return successResponse(

        res,

        "Doctor deleted",

        doctor

    );

}