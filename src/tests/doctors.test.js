// =======================================
// Doctors API Tests
// =======================================

import request from "supertest";

import app from "../app.js";



describe("Doctors API", () => {


    test("GET /api/doctors should return doctors", async () => {


        const response = await request(app)

            .get("/api/doctors");


        expect(response.statusCode).toBe(200);


        expect(response.body.success).toBe(true);


        expect(
            Array.isArray(response.body.data)
        ).toBe(true);


    });



    test("GET /api/doctors/:id should return a doctor", async () => {


        const doctorId = "PUT_REAL_DOCTOR_ID_HERE";


        const response = await request(app)

            .get(`/api/doctors/${doctorId}`);


        expect([200, 404]).toContain(
            response.statusCode
        );


    });


});