import {
    
    getAppointments,
    
    getAppointment,
    
    scheduleAppointment,
    
    modifyAppointment,
    
    removeAppointment
    
} from "../services/appointmentService.js";

import {
    
    successResponse,
    
    createdResponse,
    
    notFoundResponse
    
} from "../utils/response.js";


// get all appointments

export async function getAllAppointments(req, res) {
    
    const appointments = await getAppointments();
    
    return successResponse(res, "Appointments retrieved", appointments);
    
}

// get appointment

export async function getSingleAppointment(req, res) {
    
    const appointment = await getAppointment(req.params.id);
    
    if (!appointment) {
        
        return notFoundResponse(res, "Appointment not found");
        
    }
    
    return successResponse(res, "Appointment retrieved", appointment);
    
}

// create appointment

export async function createAppointment(req, res) {
    
    const appointment = await scheduleAppointment(req.body);
    
    return createdResponse(res, "Appointment created", appointment);
    
}

// update appointment

export async function updateAppointment(req, res) {
    
    const appointment = await modifyAppointment(req.params.id, req.body);
    
    if (!appointment) {
        
        return notFoundResponse(res, "Appointment not found");
        
    }
    return successResponse(res, "Appointment updated", appointment);
}

// delete appointment

export async function deleteAppointment(req, res) {
    
    const result = await removeAppointment(req.params.id);
    
    if (!result) {
        
        return notFoundResponse(res, "Appointment not found");
        
    }
    
    return successResponse(res, "Appointment deleted", result);
    
}
