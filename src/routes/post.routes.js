
import postCtrl from "../controllers/post.controller.js";
import { upload } from "../middleware/imgUpload.js";
import { userValidSchema } from "../middleware/userValidSchema.js";



const route = (fastify, opts, done) => {



    fastify.get('/', postCtrl.listar);
    fastify.post("/", { shema: userValidSchema, preHandler: [upload.single("img")] },
        postCtrl.add);
    fastify.put('/:id', { preHandler: [upload.single("img")] }, postCtrl.update)
    fastify.get("/:id", postCtrl.listarById)
    fastify.delete("/:id", postCtrl.delete)



    done();
}

export default route;