import dotenv from "dotenv";

dotenv.config();


export const config = {


    port:
        process.env.PORT || 3000,


    mongodbUri:
        process.env.MONGODB_URI,


    databaseName:
        process.env.DB_NAME,


    sessionSecret:
        process.env.SESSION_SECRET,


    jwtSecret:
        process.env.JWT_SECRET,


    googleClientId:
        process.env.GOOGLE_CLIENT_ID,


    googleClientSecret:
        process.env.GOOGLE_CLIENT_SECRET,


    googleCallbackUrl:
        process.env.NODE_ENV === "production"

            ? process.env.GOOGLE_CALLBACK_URL_PRODUCTION

            : process.env.GOOGLE_CALLBACK_URL_LOCAL

};