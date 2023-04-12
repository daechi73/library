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
    content.innerHTML = `<div class="card">Empty Library</div>`;
  }
  let dataKey = 0;
  library.forEach((e, i) => {
    content.innerHTML += `<div class="card" >
    <p> Book ${i + 1} 
       <span>
          <button class='delBtn' id='delBtn${i}' data-key="${dataKey}" 
            onClick='deleteBook(this.dataset.keys)'>
              x
          </button>
       </span>
    </p>
    <p> title: ${e.title}</p>
      <p> author: ${e.author}</p>
      <p> pages: ${e.pages}</p>
      <p> read: ${e.read ? "read" : "Not Read"}
    </div>`;
    // eslint-disable-next-line no-plusplus
    dataKey++;
  });
}

function closeForm() {
  formWrapper.setAttribute("class", "form-wrapper formClose");
}
function emptyLibrary() {
  content.innerHTML = "";
}
// eslint-disable-next-line no-unused-vars
function deleteBook(key) {
  library.splice(key, 1);
  emptyLibrary();
  showLibrary();
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
  const errorMsg = document.getElementById("errorMsg");
  let submit = true;

  if (title.value === "" || title.value == null) {
    errorMsg.innerHTML = `Please enter the title of the book you wish to add`;
    submit = false;
  }
  if (author.value === "" || author.value == null) {
    errorMsg.innerHTML = `Please enter the author of the book`;
    submit = false;
  }
  if (pages.value === "" || pages.value == null) {
    errorMsg.innerHTML = "Please enter the number of pages";
    submit = false;
  }
  if (submit) {
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

// addBook(new Book("jason", "", "", false));
// addBook(new Book("mamoa", "", "", false));
// addBook(new Book("smells", "", "", false));
// addBook(new Book("nice", "", "", false));
// addBook(new Book("weird", "", "", false));
// addBook(new Book("jaja", "", "", false));

showLibrary();
