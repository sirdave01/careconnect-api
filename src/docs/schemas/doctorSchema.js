// =======================================
// Doctor Swagger Schema
// =======================================

export const doctorSchema = {
    Doctor: {
        type: "object",
        required: [
            "userId",
            "firstName",
            "lastName",
            "specialization",
            "licenseNumber",
            "yearsOfExperience",
            "hospital",
            "phoneNumber"
        ],
        properties: {
            _id: {
                type: "string",
                example: "66a7429b3e1791b9229caa5b3"
            },
            userId: {
                type: "string",
                example: "66a7429b3e1791b9229caa5b3"
            },
            firstName: {
                type: "string",
                example: "Sarah"
            },
            lastName: {
                type: "string",
                example: "Williams"
            },
            specialization: {
                type: "string",
                example: "Cardiology"
            },
            licenseNumber: {
                type: "string",
                example: "MD-123456"
            },
            yearsOfExperience: {
                type: "number",
                example: 8
            },
            hospital: {
                type: "string",
                example: "Lagos University Teaching Hospital"
            },
            phoneNumber: {
                type: "string",
                example: "+2348012345678"
            },
            availability: {
                type: "string",
                example: "Available"
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