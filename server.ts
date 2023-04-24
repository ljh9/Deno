// import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

// serve((_req) => new Response("Hello, world"), { port: 5000 });


import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/',(context) => {
    context.response.body = "Hello ~~~";
})

console.log(`port 5000`);
await app.listen({ port : 5000 });