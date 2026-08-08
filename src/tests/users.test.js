// =======================================
// Users API Tests
// =======================================

import request from "supertest";

import app from "../app.js";


// =======================================
// GET /api/users
// =======================================

describe("Users API", () => {


    test("GET /api/users should return users", async () => {


        const response = await request(app)

            .get("/api/users");


        expect(response.statusCode).toBe(200);


        expect(response.body.success).toBe(true);


        expect(Array.isArray(response.body.data)).toBe(true);


    });

    test("GET /api/users/:id should return a user", async () => {

        const userId = "PUT_REAL_USER_ID_HERE";


        const response = await request(app)

            .get(`/api/users/${userId}`);


        expect([200, 404]).toContain(
            response.statusCode
        );
        
    });


});
