import express from "express";
import { readBooks, writeBook } from "./storage";
import { Book } from "./type";
import { randomUUID, UUID } from "node:crypto";
import { error } from "node:console";

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("app is running")
})

app.get("/books", (req,res) => {
    let books = readBooks();
    res.send(books)
})

app.post("/books", (req,res) => {
    const { title } = req.body;
    const { author } = req.body;

    if(!title) {
        return res.status(400).json({error: "Title not added"})
    }else if(!author) {
        return res.status(400).json({error: "Author not added"})
    }

    let books: Book[] = readBooks();

    let book: Book = {
        title,
        author,
        id: randomUUID(),
        read: false
    }

    books.push(book);
    writeBook(books);

    res.status(201).json({book}); 
})



export default app;