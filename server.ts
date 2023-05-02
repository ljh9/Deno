// import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

// serve((_req) => new Response("Hello, world"), { port: 5000 });


import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`port 5000`);
await app.listen({ port : 5000 });