// =======================================
// Patients API Tests
// =======================================

import request from "supertest";

import app from "../app.js";



describe("Patients API", () => {


    test("GET /api/patients should return patients", async () => {


        const response = await request(app)

            .get("/api/patients");


        expect(response.statusCode).toBe(200);


        expect(response.body.success).toBe(true);


        expect(
            Array.isArray(response.body.data)
        ).toBe(true);


    });



    test("GET /api/patients/:id should return a patient", async () => {


        const patientId = "PUT_REAL_PATIENT_ID_HERE";


        const response = await request(app)

            .get(`/api/patients/${patientId}`);


        expect([200, 404]).toContain(
            response.statusCode
        );


    });


});