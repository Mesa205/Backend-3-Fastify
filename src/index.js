
import Fastify from 'fastify'
import cors from "@fastify/cors";
import formBody from '@fastify/formbody';
import multer from 'fastify-multer';
import { connectDB } from "./database.js";


import postRoutes from "./routes/post.routes.js"


connectDB();









const fastify = Fastify({
    logger: true
  })



fastify.register(cors,{ origin: '*' });
fastify.register(formBody);
fastify.register(multer.contentParser);

fastify.register( postRoutes, {prefix:"/empleados" })

const start = async () => {
    try {
      await fastify.listen({ port: 4000, host: "0.0.0.0" });
      console.log("escuchando por el puerto 4000")
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()





