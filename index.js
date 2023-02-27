const library = [];
const content = document.getElementById("books");
const outerAddBtn = document.getElementById("outerAddBtn");
const innerAddBtn = document.getElementById("innerAddBtn");
const xBtn = document.getElementById("xBtn");
const formWrapper = document.getElementById("form-wrapper");

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

function showLibrary() {
  if (library.length === 0) {
    content.innerHTML = `<div class="card">Add a Book!</div>`;
  }
  library.forEach((e) => {
    content.innerHTML += `<div class="card"> 
    <p> Book ${library.length}</p>  
    <p> title: ${e.title}</p>
      <p> author: ${e.author}</p>
      <p> pages: ${e.pages}</p>
      <p> read: ${e.read}
    </div>`;
  });
}

function closeForm() {
  formWrapper.setAttribute("class", "form-wrapper formClose");
}
function emptyLibrary() {
  content.innerHTML = "";
}

outerAddBtn.addEventListener("click", () => {
  formWrapper.setAttribute("class", "form-wrapper formShow");
});

xBtn.addEventListener("click", () => {
  closeForm();
});

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

    addBook(new Book(title.value, author.value, pages.value, read.checked));
    emptyLibrary();
    showLibrary();
    author.value = "";
    title.value = "";
    pages.value = "";
    read.checked = false;
    closeForm();
    document.getElementById("errorMsg").innerHTML = ``;
  }
});

showLibrary();
