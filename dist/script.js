var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let bookList = document.getElementById("book-list");
let submitButton = document.getElementById("submitBtn");
const API_URL = `http://localhost:3000/books`;
function loadBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(API_URL);
            let books = yield response.json();
            bookList.innerHTML = "";
            for (let i = 0; i < books.length; i++) {
                let title = books[i].title;
                let author = books[i].author;
                let id = books[i].id;
                let read = books[i].read;
                let sites = books[i].sites;
                bookList.innerHTML += `
        <div class="book-card">
              <div class="book-info">
                <h3>${title}</h3>
                <p class="author">${author}</p>
                <span class="isbn">ID: ${id}</span>
                <p>Read: ${read}</p>
                <p>Sites: ${sites}</p>
              </div>
            <div class="book-actions">
                <button class="btn-icon read">Read</button>
                <button onclick="deleteBook('${id}')" class="btn-icon delete">Löschen</button>
            </div>
        </div>
        `;
            }
        }
        catch (error) {
            console.error("API Fetch error");
        }
    });
}
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        yield loadBooks();
    });
}
function postBooks(title, author, sites) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    author: author,
                    sites: sites,
                }),
            });
            if (!response.ok) {
                throw new Error("failed to add a book");
            }
            const data = yield response.json();
        }
        catch (error) {
            console.error("Fetch Error:", error);
        }
        loadBooks();
    });
}
loadBooks();
