import express from "express";
import { readBooks, writeBook } from "./storage";
import { Book } from "./type";
import { randomUUID, UUID } from "node:crypto";
import { error } from "node:console";
import { read } from "node:fs";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/dist", express.static("dist"));

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get("/books", (req, res) => {
  let books = readBooks();
  res.send(books);
});

app.post("/books", (req, res) => {
  const { title } = req.body;
  const { author } = req.body;
  const { sites } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title not added" });
  } else if (!author) {
    return res.status(400).json({ error: "Author not added" });
  }

  let books: Book[] = readBooks();

  let book: Book = {
    title,
    author,
    sites,
    id: randomUUID(),
    read: false
  };

  books.push(book);
  writeBook(books);

  res.status(201).json({ book });
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;

  let books = readBooks();
  let newBooks: Book[] = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].id !== id) {
      newBooks.push(books[i]);
    }
  }

  if (newBooks.length == books.length) {
    return res.status(400).json({ error: "id not found" });
  } else {
    writeBook(newBooks);
    return res.status(201).json({ message: "successfully deleted" });
  }
});

app.put("/books/:id", (req, res) => {
  const id = req.params.id;

  let books = readBooks();

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      if (!books[i].read) {
        books[i].read = true;
      } else {
        books[i].read = false;
      }
      return res.status(200).json({ message: "successfully changed!" });
    }
  }

  return res.status(404).json({ error: "ID not found" });
});

export default app;
