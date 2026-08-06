// =======================================
// Application Entry Point
// =======================================


import app from "./app.js";

import {
    config
} from "./src/config/config.js";


import {
    connectDatabase
} from "./src/database/mongodb.js";




// =======================================
// Start Server
// =======================================

async function startServer() {

    try {

        await connectDatabase();

        app.listen(

            config.port,

            () => {

                console.log(

                    `🚀 Server running on port ${config.port}`

                );

            }

        );

    } catch (error) {

        console.error(error);

        process.exit(1);

    }

}

startServer();