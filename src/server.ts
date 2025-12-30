import { app } from "./app.js";
import { env } from "./env/schema.js";

async function startServer(){
    await app.listen(env.PORT, () => {

    })

    console.log('HTTP server running')
}

startServer()