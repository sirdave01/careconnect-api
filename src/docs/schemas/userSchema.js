// =======================================
// User Swagger Schema
// =======================================

export const userSchema = {
    User: {
        type: "object",
        properties: {
            _id: {
                type: "string",
                example: "66a7429b3e1791b9229caa5b3"
            },
            googleId: {
                type: "string",
                example: "112233445566778899"
            },
            firstName: {
                type: "string",
                example: "David"
            },
            lastName: {
                type: "string",
                example: "Caleb"
            },
            email: {
                type: "string",
                format: "email",
                example: "david@example.com"
            },
            profileImage: {
                type: "string",
                example: "https://lh3.googleusercontent.com/a/..."
            },
            role: {
                type: "string",
                enum: ["patient", "doctor"],
                example: "patient"
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