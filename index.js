const library = [];
const content = document.getElementById("books");
const outerAddBtn = document.getElementById("outerAddBtn");
const innerAddBtn = document.getElementById("innerAddBtn");
const form = document.querySelector("form");

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
  form.removeAttribute("class");
});
showLibrary();

innerAddBtn.addEventListener("click", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");

  if (title.value === "" || title.value == null) {
    document.getElementById(
      "errorMsg"
    ).innerHTML = `Please enter the title of the book you wish to add`;
  } else {
    if (author.value === "" || author.value == null) {
      author.value = "N/A";
    }
    content.innerHTML += `
    <div class="card">
    <p> Title: ${title.value}</p>  
    <p>Author: ${author.value}</p>  
    <p>Pages:${pages.value} </p> 
    <p> Read: ${read.checked ? "Read" : "Unread"}</p> 
    <div>`;
  }
});
