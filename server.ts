// import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

// serve((_req) => new Response("Hello, world"), { port: 5000 });


import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface Book {
    id: string;
    title: string;
    author: string;
}

let books: Book[] = [
    {
        id: "1", 
        title: "Book Two",
        author: "One",
    },
    {
        id: "2", 
        title: "Book Two",
        author: "One",
    },
    {
        id: "3", 
        title: "Book Two",
        author: "One",
    },
]

router.get('/',(context) => {
    context.response.body = "Hello ~~~";
})
    .get("/books", (context) => {
        context.response.body = books;
    })
    .post("/book", async (context) => {
        const body = await context.request.body();

        if(!context.request.hasBody) {
            context.response.status = 400
            context.response.body = "no data"
        } else {
            
        }
    });

console.log(`port 5000`);
await app.listen({ port : 5000 });