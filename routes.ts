import { Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Book } from "./types.ts";

const router = new Router();

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
            const book : Book = body.value;
            book.id = v4.generate();
            books.push(book)
            context.response.status = 201
            context.response.body = book
        }
    })
    .get("/book/:id", async(context) => {
        const book: Book | undefined = books.find((b) => b.id === context.params.id)
        if(book) { 
            context.response.body = book;
            context.response.status = 200;
        } else {
            context.response.body = "못찾음";
            context.response.status = 404;
        }
    });

    export default router;