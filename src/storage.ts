import fs, { readFileSync } from "fs";
import path from "path";
import { Book } from "./type";

const DATA_FILE = path.join(__dirname, "../books.json")

function ensureDataFile() {
    if(!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, "[]", "utf-8");
    }
}

export function readBooks(): Book[] {
    ensureDataFile();
    
    let books = readFileSync(DATA_FILE,"utf-8");
    
    return JSON.parse(books);
}

export function writeBook(book: Book[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(book, null, 2));
}
