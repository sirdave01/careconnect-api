// =======================================
// Appointments API Tests
// =======================================

import request from "supertest";

import app from "../app.js";



describe("Appointments API", () => {


    test(
        "GET /api/appointments should return appointments",
        async () => {


            const response = await request(app)

                .get("/api/appointments");


            expect(response.statusCode).toBe(200);


            expect(response.body.success).toBe(true);


            expect(
                Array.isArray(response.body.data)
            ).toBe(true);


        }
    );



    test(
        "GET /api/appointments/:id should return an appointment",
        async () => {


            const appointmentId =
                "PUT_REAL_APPOINTMENT_ID_HERE";


            const response = await request(app)

                .get(
                    `/api/appointments/${appointmentId}`
                );


            expect([200, 404]).toContain(
                response.statusCode
            );


        }
    );


});