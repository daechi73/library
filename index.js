const library = [];
const content = document.getElementById("books");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {
  library.push(book);
}

addBook(new Book("yo", "yoyo", "123", true));
addBook(new Book("ja", "jaja", "456", true));

function showLibrary() {
  library.forEach((e) => {
    content.innerHTML += `<div class="card"> 
    <p> title: ${e.title}</p>
      <p> author: ${e.author}</p>
      <p> pages: ${e.pages}</p>
      <p> read: ${e.read ? "read" : "not read"}
    </div>`;
  });
}

showLibrary();
