import {

findAllAppointments,

findAppointmentById,

createAppointment,

updateAppointment,

deleteAppointment

} from "../repositories/appointmentRepository.js";



export async function getAppointments(){

    return findAllAppointments();

}



export async function getAppointment(id){

    return findAppointmentById(id);

}



export async function scheduleAppointment(data){

    return createAppointment(data);

}



export async function modifyAppointment(id,data){

    return updateAppointment(id,data);

}



export async function removeAppointment(id){

    return deleteAppointment(id);

}