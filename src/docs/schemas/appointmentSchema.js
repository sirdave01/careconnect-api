// =======================================
// Appointment Swagger Schema
// =======================================

export const appointmentSchema = {
    Appointment: {
        type: "object",
        required: [
            "patientId",
            "doctorId",
            "appointmentDate",
            "appointmentTime",
            "reason"
        ],
        properties: {
            _id: {
                type: "string",
                example: "66a7429b3e1791b9229caa5b3"
            },
            patientId: {
                type: "string",
                example: "66a7429b3e1791b9229caa5b3"
            },
            doctorId: {
                type: "string",
                example: "66a7429b3e1791b9229caa5b4"
            },
            appointmentDate: {
                type: "string",
                format: "date",
                example: "2026-08-15"
            },
            appointmentTime: {
                type: "string",
                example: "10:30"
            },
            reason: {
                type: "string",
                example: "Routine medical consultation"
            },
            status: {
                type: "string",
                enum: ["pending", "approved", "completed", "cancelled"],
                example: "pending"
            },
            notes: {
                type: "string",
                example: "Patient requested morning appointment"
            },
            createdAt: {
                type: "string",
                format: "date-time"
            },
            updatedAt: {
                type: "string",
                format: "date-time"
            }
        }
    }
};