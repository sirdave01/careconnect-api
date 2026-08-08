// =======================================
// Patient Swagger Schema
// =======================================

export const patientSchema = {
    Patient: {
        type: "object",
        required: [
            "userId",
            "firstName",
            "lastName",
            "gender",
            "dateOfBirth",
            "phoneNumber",
            "address",
            "bloodType",
            "emergencyContact"
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
                example: "John"
            },
            lastName: {
                type: "string",
                example: "Doe"
            },
            gender: {
                type: "string",
                enum: ["male", "female", "other"],
                example: "male"
            },
            dateOfBirth: {
                type: "string",
                format: "date",
                example: "1995-05-20"
            },
            phoneNumber: {
                type: "string",
                example: "+2348012345678"
            },
            address: {
                type: "string",
                example: "Lagos, Nigeria"
            },
            bloodType: {
                type: "string",
                example: "O+"
            },
            emergencyContact: {
                type: "string",
                example: "+2348098765432"
            },
            medicalHistory: {
                type: "string",
                example: "No known allergies"
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