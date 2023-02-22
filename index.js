const library = [];
const content = document.getElementById("books");
const outerAddBtn = document.getElementById("outerAddBtn");
const innerAddBtn = document.getElementById("innerAddBtn");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBook(book) {
  library.push(book);
}

addBook(new Book("yo", "yoyo", "123", true));
addBook(new Book("ja", "jaja", "456", false));

function showLibrary() {
  library.forEach((e) => {
    content.innerHTML += `<div class="card"> 
    <p> title: ${e.title}</p>
      <p> author: ${e.author}</p>
      <p> pages: ${e.pages}</p>
      <p> read: ${e.read}
    </div>`;
  });
}

outerAddBtn.addEventListener("click", () => {
  document.querySelector("form").removeAttribute("class");
});
showLibrary();

innerAddBtn.addEventListener("click", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");

  content.innerHTML += `<div class="card"><p> Title: ${
    title.value
  }</p>  <p>Author: ${author.value}</p>  <p>Pages:${
    pages.value
  } </p> <p> Read: ${read.checked ? "Read" : "Unread"}</p> <div>`;
});
