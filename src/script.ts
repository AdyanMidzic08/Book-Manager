// import { PORT } from "./server";
let bookList = document.getElementById("book-list") as HTMLUListElement;

const API_URL: string = `http://localhost:3000/books`;

async function loadBooks() {
  try {
    let response = await fetch(API_URL);
    let books = await response.json();

    bookList.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
      let title = books[i].title;
      let author = books[i].author;
      let id = books[i].id;
      let read = books[i].read;

      bookList.innerHTML += `
        <div class="book-card">
              <div class="book-info">
                <h3>${title}</h3>
                <p class="author">${author}</p>
                <span class="isbn">ID: ${id}</span>
                <p>Read: ${read}</p>
              </div>
            <div class="book-actions">
                <button class="btn-icon read">Read</button>
                <button class="btn-icon delete">Löschen</button>
            </div>
        </div>
        `;
    }
  } catch (error) {
    console.error("API Fetch error");
  }
}

loadBooks();
