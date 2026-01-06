let bookList = document.getElementById("book-list") as HTMLUListElement;
let submitButton = document.getElementById("submitBtn") as HTMLButtonElement;

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
  } catch (error) {
    console.error("API Fetch error");
  }
}

async function deleteBook(id: string) {
  let response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  await loadBooks();
}

async function postBooks(title: string, author: string, sites: number) {
  try {
    let response = await fetch(API_URL, {
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
    const data = await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  loadBooks();
}

loadBooks();
