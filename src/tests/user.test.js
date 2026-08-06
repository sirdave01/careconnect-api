import request from "supertest";

import app from "../app.js";


describe("Users API", () => {


    // =======================================
    // GET ALL USERS
    // =======================================

    test(
        "GET /api/users should return users",
        async () => {


            const response = await request(app)
                .get("/api/users");


            expect(response.statusCode)
                .toBe(200);



            expect(response.body)
                .toHaveProperty("success");


        }
    );




    // =======================================
    // GET USER BY INVALID ID
    // =======================================

    test(
        "GET /api/users/:id should reject invalid ID",
        async()=>{


            const response = await request(app)
                .get("/api/users/invalid-id");



            expect(response.statusCode)
                .toBe(400);



        }
    );



});